const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let contact = new Schema({
    name: {
        type: String
    },
    phone_number: {
        type: String
    }
}, {
    collection: 'contact'
});

module.exports = mongoose.model('contact', contact)