const Grateful = require('../schemas/grateful')

exports.create_grateful = (req, res, next) => {
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

exports.get_grateful = (req, res) => {
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

exports.update_grateful = (req, res) => {
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

exports.delete_grateful = (req, res) => {
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

exports.get_all_grateful = (req, res) => {
  Grateful.find({userID: req.params.userID})
    .sort({_id: -1})
    .then((data) => {
      res.send({success: 'success', data: data, errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}

exports.delete_all_grateful = (req, res) => {
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
