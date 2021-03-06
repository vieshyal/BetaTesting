const mongoose = require('../connection');

const schema = mongoose.Schema({
    fullname: String,
    avatar: String,
    email: String,
    subject:String,
    password: String,
    age: Number,
    created: Date,
    isadmin: Boolean,
    interest: Array,
})


const model = mongoose.model('Users', schema);

module.exports = model;