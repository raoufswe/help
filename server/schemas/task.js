const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  title: {type: String, required: true},
  details: String,
  completed: {
    type: Boolean,
    default: false,
  },
  date: String,
  time: String,
  userID: String,
})

module.exports = mongoose.model('Task', TaskSchema)
