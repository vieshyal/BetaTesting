const mongoose = require('../connection');

const schema = mongoose.Schema({
    name: String,
    password: String,
    desc: String,
    avatar: String,
    created: Date,
    date: Date,
})


const model = mongoose.model('Company', schema);

module.exports = model;