
const mongoose = require('../connection');

const schema = mongoose.Schema({
    title:String,
    type: String,
    eligibility: Object,
    company: {type : mongoose.Types.ObjectId ,ref : "Company"},
    users: Array,
    created: Date,
    startDate:Date,
    endDate:Date,

  

})


const model = mongoose.model('Beta tests', schema);

module.exports = model;