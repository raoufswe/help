const mongoose = require('mongoose')
const Schema = mongoose.Schema

let GratefulSchema = new Schema({
  content: {type: String, required: true},
  userID: {type: String, required: true},
})

module.exports = mongoose.model('Grateful', GratefulSchema)
