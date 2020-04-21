const Grateful = require('../schemas/grateful')

exports.grateful_create = (req, res, next) => {
  let grateful = new Grateful({
    content: req.body.content,
    userID: req.body.userID,
  })

  grateful
    .save()
    .then((data) => {
      res.send({success: 'success', data: data, error: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}

exports.grateful_get = (req, res) => {
  Grateful.findOne({_id: req.params.id, userID: req.params.userID})
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

exports.grateful_update = (req, res) => {
  Grateful.findOneAndUpdate(
    {_id: req.params.id, userID: req.params.userID},
    {$set: req.body},
  )
    .then((docs) => {
      if (docs) {
        res.send({success: 'success', data: [docs], errors: []})
      } else {
        res.send({
          success: false,
          data: [],
          errors: 'no data exist for this id or user',
        })
      }
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}

exports.grateful_delete = (req, res) => {
  Grateful.findOneAndRemove({_id: req.params.id, userID: req.params.userID})
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

exports.grateful_getAll = (req, res) => {
  Grateful.find({userID: req.params.userID})
    .sort({createdAt: -1})
    .then((data) => {
      res.send({success: 'success', data: data, errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}

exports.grateful_deleteAll = (req, res) => {
  Grateful.remove({userID: req.params.userID})
    .then((data) => {
      res.send({success: 'success', data: [], errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}
