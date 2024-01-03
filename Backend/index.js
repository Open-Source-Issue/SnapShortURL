const express = require('express');
const cors = require('cors');
const URLRoutes = require('./Routes/SnapShortURL.Route');
const { connecttoMongoDB } = require('./connect')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const MongoURL = process.env.MongoURL;

const URL = require('./Models/SnapShortURL.models');

connecttoMongoDB(MongoURL).then((data) => console.log(`database connected successfully ${data}`)).catch((err) => console.log(`${err}`))

const app = express();

app.use(cors());

app.use(express.json())

app.use('/url', URLRoutes)

app.get('/:shortID', async (req, res) => {
    const shortID = req.params.shortID; 
    const entry = await URL.findOneAndUpdate(
        {
            shortID
        },
        {
            $push: {
                VisitedHistory:
                {
                    timestamps: Date.now()
                },
            },
        })
    res.redirect(entry.redirectURL);
})


app.listen(PORT, () => console.log(`Server Running...${PORT}`))