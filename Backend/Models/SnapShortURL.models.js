const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({

    shortID: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    VisitedHistory: [
        {
            timestamp: { type: Number }
        }
    ]
}, { timestamps: true })

const mongooseModel = mongoose.model('mongooseURL', mongooseSchema);

module.exports = mongooseModel;