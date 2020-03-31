const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FeelingSchema = new Schema({
  _id: String,
  feeling: { type: String, required: true },
  userID: { type: String, required: true }
})

module.exports = mongoose.model("Feeling", FeelingSchema)
