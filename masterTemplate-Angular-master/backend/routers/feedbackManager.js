const Model = require('../models/feedbackModel');
const router = require('express').Router();

router.post('/add', (req, res) => {
new Model(req.body).save()
.then(data => {
console.log('Feedback data added');
res.status(200).json({ message: 'success' });
})
.catch(err => {
console.error(err);
res.status(500).json(err);
})
})

router.get('/getall', (req, res) => {

Model.find({})
.then(data => {
console.log('Company fetched');
res.status(200).json(data);
})
.catch(err => {
console.error(err);
res.status(500).json(err);
})
})

router.get('/getbyid/:id', (req, res) => {

Model.findById(req.params.id)
.then(data => {
console.log('company fetched by id');
res.status(200).json(data);
})
.catch(err => {
console.error(err);
res.status(500).json(err);
})
})

router.get('/getbytest/:id', (req, res) => {

Model.findOne({ feedback: req.params.id })
.then(data => {
console.log('feedback get by id');
res.status(200).json(data);
})
.catch(err => {
console.error(err);
res.status(500).json(err);
})
})
router.delete('/delete/:id', (req, res) => {

Model.findByIdAndDelete(req.params.id)
.then(data => {
console.log('feedback deleted by id');
res.status(200).json(data);
})
.catch(err => {
console.error(err);
res.status(500).json(err);
})
})

module.exports = router;