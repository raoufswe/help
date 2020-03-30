const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
const saltRounds = 10

const schema = new Schema(
  {
    email: { type: String, unique: true },
    password: String,
    name: String,
    googleId: String,
    facebookId: String
  },
  { timestamps: true }
)

if (schema.password) {
  schema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
  })
}

module.exports = mongoose.model("User", schema)
