const express = require('express');
const URLRoutes = require('./Routes/SnapShortURL.Route');
const { connecttoMongoDB } = require('./connect')


const app = express();

connecttoMongoDB('mongodb://localhost:27017/snapshorturl').then(() => console.log(`mongoDB Connected ....`)).catch(err => console.log(`Something went wrong ${err}`))

app.use('/url', URLRoutes)

app.listen(8080, () => console.log('Server Running...'))