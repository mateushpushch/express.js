const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/express-user', {useNewUrlParser: true});


const schema = new mongoose.Schema({
    name: String,
    address: {street: String, suite: String, city: String, zipcode: String},
    phone: String,
    website: String,
});


module.exports = mongoose.model('User', schema);