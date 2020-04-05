const Feeling = require("../schemas/feeling")

exports.feeling_create = (req, res, next) => {
  let feeling = new Feeling({
    feeling: req.body.feeling,
    _id: req.body._id,
    userID: req.body.userID
  })
  feeling
    .save()
    .then(data => {
      res.send({ success: "success", data, error: [] })
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: err })
      console.log(err)
    })
}

exports.feeling_update = (req, res) => {
  Feeling.findOneAndUpdate(
    { _id: req.params.id, userID: req.params.userID },
    { $set: req.body }
  )
    .then(docs => {
      if (docs) {
        res.send({ success: "success", data: docs, errors: [] })
      } else {
        res.send({
          success: false,
          data: [],
          errors: "no data exist for this id"
        })
      }
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}

exports.feeling_delete = (req, res) => {
  Feeling.findOneAndRemove({ _id: req.params.id, userID: req.params.userID })
    .then(docs => {
      if (docs) {
        res.send({ success: "success", data: [docs], errors: [] })
      } else {
        res.send({
          success: false,
          data: [],
          errors: "no data exist for this id or user"
        })
        console.log(err)
      }
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}

exports.feelings_delete = (req, res) => {
  Feeling.remove()
    .then(data => {
      res.send({ success: "success", data: [], errors: [] })
      console.log(data)
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}

exports.feelings_get = (req, res) => {
  Feeling.find({ userID: req.params.userID })
    .sort({ createdAt: -1 })
    .then(data => {
      res.send({ success: "success", data: data, errors: [] })
      console.log(data)
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}
