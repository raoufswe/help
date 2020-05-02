const Feeling = require('../schemas/feeling')

exports.get_feeling = (req, res) => {
  Feeling.findOne({
    week: new Date().toLocaleDateString().replace(/\//g, '-'),
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

exports.update_feeling = (req, res) => {
  const options = {upsert: true, new: true, setDefaultsOnInsert: true}

  Feeling.findOneAndUpdate(
    {
      week: new Date().toLocaleDateString().replace(/\//g, '-'),
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
