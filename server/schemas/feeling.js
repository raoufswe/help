const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeelingSchema = new Schema(
  {
    feeling: String,
    userID: {type: String, required: true},
  },
  {timestamps: true},
)

module.exports = mongoose.model('Feeling', FeelingSchema)
