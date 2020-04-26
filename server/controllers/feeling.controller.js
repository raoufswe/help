const Feeling = require('../schemas/feeling')

exports.create_feeling = (req, res, next) => {
  let feeling = new Feeling({
    week: req.body.week,
    Sat: req.body.Sat,
    Sun: req.body.Sun,
    Mon: req.body.Mon,
    Tue: req.body.Tue,
    Wed: req.body.Wed,
    Thu: req.body.Thu,
    Fri: req.body.Fri,
    userID: req.body.userID,
  })
  feeling
    .save()
    .then((data) => {
      res.send({success: 'success', data, error: []})
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: err})
      console.log(err)
    })
}

exports.get_feeling = (req, res) => {
  Feeling.findOne({week: req.params.week, userID: req.params.userID})
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

exports.update_feeling = (req, res) => {
  Feeling.findOneAndUpdate(
    {week: req.params.week, userID: req.params.userID},
    {$set: req.body},
  )
    .then((docs) => {
      if (docs) {
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

exports.delete_feeling = (req, res) => {
  Feeling.findOneAndRemove({week: req.params.week, userID: req.params.userID})
    .then((docs) => {
      if (docs) {
        res.send({success: 'success', data: [docs], errors: []})
      } else {
        res.send({
          success: false,
          data: [],
          errors: 'no data exist for this id or user',
        })
        console.log(err)
      }
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}

exports.get_feelings = (req, res) => {
  Feeling.find({userID: req.params.userID})
    .then((data) => {
      res.send({success: 'success', data: data, errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}

exports.delete_feelings = (req, res) => {
  Feeling.remove()
    .then((data) => {
      res.send({success: 'success', data: [], errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}
