const express = require('express');
const URLRoutes = require('./Routes/SnapShortURL.Route');
const { connecttoMongoDB } = require('./connect')

connecttoMongoDB('mongodb://127.0.0.1:27017/myapp').then((data)=>console.log(`database connected successfully ${data}`)).catch((err)=>console.log(`${err}`))

const app = express();

app.use(express.json())

app.use('/url', URLRoutes)

app.listen(8081, () => console.log('Server Running...'))