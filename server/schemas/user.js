const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const schema = new Schema(
  {
    email: {type: String, unique: true},
    password: String,
    name: String,
    googleId: String,
    facebookId: String,
    gender: String,
  },
  {timestamps: true},
)

schema.pre('save', function (next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
  }
  next()
})

module.exports = mongoose.model('User', schema)
