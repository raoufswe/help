const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  title: {type: String, required: true},
  details: String,
  completed: Boolean,
  date: String,
  time: String,
})

module.exports = mongoose.model('Task', TaskSchema)
