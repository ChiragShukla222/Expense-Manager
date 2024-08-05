const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

// Create the model
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
