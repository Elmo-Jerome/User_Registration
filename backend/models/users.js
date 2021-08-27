const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    company: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    role: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
});

const usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel;

