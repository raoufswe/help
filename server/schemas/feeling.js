const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeelingSchema = new Schema({
  week: {type: String},
  Sat: {
    weight: Number,
    emoji: String,
  },
  Sun: {
    weight: Number,
    emoji: String,
  },
  Mon: {
    weight: Number,
    emoji: String,
  },
  Tue: {
    weight: Number,
    emoji: String,
  },
  Wed: {
    weight: Number,
    emoji: String,
  },
  Thu: {
    weight: Number,
    emoji: String,
  },
  Fri: {
    weight: Number,
    emoji: String,
  },
  userID: {type: String},
})

module.exports = mongoose.model('Feeling', FeelingSchema)
