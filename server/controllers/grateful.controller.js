const Grateful = require("../schemas/grateful")

exports.grateful_create = (req, res, next) => {
  let grateful = new Grateful({
    content: req.body.content
  })

  grateful
    .save()
    .then(data => {
      res.send({ success: "success", data: data, error: [] })
      console.log(data)
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}

exports.grateful_get = (req, res) => {
  Grateful.findOne({ _id: req.params.id })
    .then(doc => {
      if (doc) {
        res.send({ success: "success", data: doc, error: [] })
        console.log(doc)
      } else {
        res.send({
          success: false,
          data: [],
          errors: "no data exist for this id"
        })
        console.log(doc)
      }
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}

exports.grateful_update = (req, res) => {
  Grateful.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then(docs => {
      if (docs) {
        res.send({ success: "success", data: [docs], errors: [] })
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

exports.grateful_delete = (req, res) => {
  Grateful.findOneAndRemove({ _id: req.params.id })
    .then(docs => {
      if (docs) {
        res.send({ success: "success", data: [docs], errors: [] })
      } else {
        res.send({
          success: false,
          data: [],
          errors: "no data exist for this id"
        })
        console.log(err)
      }
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}

exports.grateful_getAll = (req, res) => {
  Grateful.find({})
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

exports.grateful_deleteAll = (req, res) => {
  Grateful.remove({})
    .then(data => {
      res.send({ success: "success", data: [], errors: [] })
      console.log(data)
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}
