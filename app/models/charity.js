const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema;


const charitySchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: function () {
                return "invalid email format";
            },
        },
    },
    message: {
        type: String,
        required: true
    }
})

const Charity = mongoose.model('Charity', charitySchema);
module.exports = {
    Charity
}