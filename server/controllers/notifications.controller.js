const Notifications = require('../schemas/notifications')

exports.get_notification_device = (req, res) => {
  Notifications.findOne({
    deviceToken: req.params.deviceToken,
    userID: req.params.userID,
  })
    .then((doc) => {
      if (doc) {
        res.send({success: 'success', data: doc, error: []})
        console.log(doc)
      } else {
        res.send({
          success: false,
          data: [],
          errors: 'no data exist for this id and user',
        })
        console.log(doc)
      }
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}

exports.update_notification_device = (req, res) => {
  const options = {upsert: true, new: true, setDefaultsOnInsert: true}

  Notifications.findOneAndUpdate(
    {
      deviceToken: req.params.deviceToken,
      userID: req.params.userID,
    },
    {$set: req.body},
    options,
  )
    .then((docs) => {
      if (docs) {
        console.log(docs)
        res.send({success: 'success', data: docs, errors: []})
      } else {
        res.send({
          success: false,
          data: [],
          errors: 'no data exist for this id',
        })
      }
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}

exports.get_notification_devices = (req, res) => {
  Notifications.find({userID: req.params.userID})
    .then((data) => {
      res.send({success: 'success', data: data, errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}
