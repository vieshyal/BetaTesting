const mongoose = require('../connection');

const schema = mongoose.Schema({
    name: String,
    desc: String,
    avatar:String,
    created: Date
  

})


const model = mongoose.model('Company', schema);

module.exports = model;