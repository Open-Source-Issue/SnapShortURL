const express = require('express');
const cors = require('cors');
const URLRoutes = require('./Routes/SnapShortURL.Route');
const { connecttoMongoDB } = require('./connect')
require('dotenv').config();
const PORT = process.env.PORT || 3005;
const MongoURL = process.env.MongoURL;

const URL = require('./Models/SnapShortURL.models');

const Signup = require('./Models/Signup.model');


connecttoMongoDB(MongoURL).then((data) => console.log(`database connected successfully ${data}`)).catch((err) => console.log(`${err}`))

const app = express();

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use('/url', URLRoutes)

app.use('/signup', async (req, res) => {
    const data = {
        FullName: req.body.FullName,
        Email: req.body.Email,
        Password: req.body.Password,
    }

    try {

        const existingUser = await Signup.collection.findOne({ Email: data.Email })
        if (existingUser) {
            res.status(409).send('User Already exist!');
        }
        const newUser = new Signup(data);
        await newUser.save();
        res.send('user Created Successfully');
    }

    catch (error) {
        console.log('Something went Wrong..');
        res.status(500).send("Internal Server Error");
    }

})

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