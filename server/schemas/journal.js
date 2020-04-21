const mongoose = require('mongoose')
const Schema = mongoose.Schema

let JournalSchema = new Schema(
  {
    content: {type: String, required: true},
    userID: {type: String, required: true},
  },
  {timestamps: true},
)

module.exports = mongoose.model('Journal', JournalSchema)
