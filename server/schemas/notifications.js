const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationsSchema = new Schema({
  deviceToken: String,
  userID: {type: String, required: true},
})

module.exports = mongoose.model('Notifications', NotificationsSchema)
