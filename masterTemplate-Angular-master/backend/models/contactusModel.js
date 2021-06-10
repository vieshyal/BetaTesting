const mongoose = require('../connection');

const schema = mongoose.Schema({

    name:String,
    email: String,
    subject: String,
})


const model = mongoose.model('contactus', schema);

module.exports = model;