const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
    FullName: {
        type: String
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    }
}, { timeseries: true });

const SignupModel = mongoose.model('Signup',SignupSchema);

module.exports = SignupModel;