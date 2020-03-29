const Journal = require("../schemas/journal")

exports.journal_create = (req, res, next) => {
  let journal = new Journal({
    content: req.body.content
  })

  journal
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

exports.journal_get = (req, res) => {
  Journal.findOne({ _id: req.params.id })
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

exports.journal_update = (req, res) => {
  Journal.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
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

exports.journal_delete = (req, res) => {
  Journal.findOneAndRemove({ _id: req.params.id })
    .then(docs => {
      if (docs) {
        res.send({ success: "success", data: docs, errors: [] })
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

exports.journals_get = (req, res) => {
  Journal.find({})
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

exports.journals_delete = (req, res) => {
  Journal.remove({})
    .then(data => {
      res.send({ success: "success", data: [], errors: [] })
      console.log(data)
    })
    .catch(err => {
      res.send({ success: false, data: [], errors: [err] })
      console.log(err)
    })
}
