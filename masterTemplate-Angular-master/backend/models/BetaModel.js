
const mongoose = require('../connection');

const schema = mongoose.Schema({
    title: String,
    type: String,
    eligibility: Object,
    company: { type: mongoose.Types.ObjectId, ref: "Company" },
    users: [{ type: mongoose.Types.ObjectId, ref: "Users" }],
    created: Date,
    thumb: String,
    startDate: Date,
    endDate: Date,
})


const model = mongoose.model('Beta', schema);

module.exports = model;