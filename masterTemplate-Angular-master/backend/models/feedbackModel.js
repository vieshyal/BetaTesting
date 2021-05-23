const mongoose = require('../connection');

const schema = mongoose.Schema({
name: String,
email:String,
question1:String,
question2:String,
question3:String,
question4:String,
question5:String,
question6:String,
beta: { type: mongoose.Types.ObjectId, ref: "Beta" },
company: { type: mongoose.Types.ObjectId, ref: "Company" },
users: [{ type: mongoose.Types.ObjectId, ref: "Users" }],
created: Date,
startDate: Date,
endDate: Date,
})


const model = mongoose.model('feedbacks', schema);

module.exports = model;