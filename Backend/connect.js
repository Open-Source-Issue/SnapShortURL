const mongoose = require('mongoose');

async function connecttoMongoDB(url) {
    return await mongoose.connect(url)
}

module.exports = {
    connecttoMongoDB
}
