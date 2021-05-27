const mongoose = require('../connection');

const schema = mongoose.Schema({

    beta: { type: mongoose.Types.ObjectId, ref: "Beta" },
    company: { type: mongoose.Types.ObjectId, ref: "Company" },
    users: [{ type: mongoose.Types.ObjectId, ref: "Users" }],
    created: Date,
    startDate: Date,
    endDate: Date,
})


const model = mongoose.model('feedbacks', schema);

module.exports = model;