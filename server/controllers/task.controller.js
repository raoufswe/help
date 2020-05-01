const Task = require('../schemas/task')

exports.create_task = (req, res, next) => {
  const task = new Task({
    title: req.body.title,
    details: req.body.details,
    date: req.body.date,
    time: req.body.time,
    completed: req.body.completed,
    userID: req.body.userID,
  })

  task
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

exports.get_task = (req, res) => {
  Task.findOne({_id: req.params.id, userID: req.params.userID})
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

exports.update_task = (req, res) => {
  Task.findOneAndUpdate(
    {_id: req.params.id, userID: req.params.userID},
    {$set: req.body},
  )
    .then((docs) => {
      if (docs) {
        res.send({success: 'success', data: docs, errors: []})
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

exports.delete_task = (req, res) => {
  Task.findOneAndRemove({_id: req.params.id, userID: req.params.userID})
    .then((docs) => {
      if (docs) {
        res.send({success: 'success', data: docs, errors: []})
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

exports.get_tasks = (req, res) => {
  Task.find({})
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
exports.get_user_tasks = (req, res) => {
  Task.find({userID: req.params.userID})
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

exports.get_incomplete_tasks = (req, res) => {
  Task.find({userID: req.params.userID, completed: false})
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

exports.get_completed_tasks = (req, res) => {
  Task.find({userID: req.params.userID, completed: true})
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

exports.delete_tasks = (req, res) => {
  Task.remove()
    .then((data) => {
      res.send({success: 'success', data: [], errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}
