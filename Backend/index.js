const express = require('express');
const URLRoutes = require('./Routes/SnapShortURL.Route');
const { connecttoMongoDB } = require('./connect')

const URL = require('./Models/SnapShortURL.models');

connecttoMongoDB('mongodb://127.0.0.1:27017/SnapShortURL').then((data) => console.log(`database connected successfully ${data}`)).catch((err) => console.log(`${err}`))

const app = express();

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


app.listen(8081, () => console.log('Server Running...'))