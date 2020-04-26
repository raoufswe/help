const User = require('../schemas/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register_user = function (req, res) {
  let user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  }
  User.create(user)
    .then((User) => {
      res.send({success: true, result: User, errors: []})
      console.log('saved to db')
    })
    .catch((err) => {
      res.send({success: false, result: [], errors: [err]})
      console.log(err)
    })
}

exports.auth_user = function (req, res, next) {
  if (req.body.email !== '' && req.body.password !== '') {
    User.findOne(
      {
        email: req.body.email,
      },
      function (err, userInfo) {
        if (userInfo === null) {
          res.send({success: false, result: [], errors: [err]})
        } else {
          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign(
              {
                id: userInfo._id,
                name: userInfo.name,
              },
              req.app.get('secretKey'),
              {expiresIn: '24h'},
            )
            res.json({
              status: 'success',
              message: 'User Found',
              data: {user: userInfo, token: token},
            })
          } else {
            res.send({success: false, result: [], errors: [err]})
          }
        }
      },
    )
  } else {
    res.send({success: false, result: [], errors: [err]})
  }
}

exports.get_users = (req, res) => {
  User.find({})
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

exports.delete_users = (req, res) => {
  User.remove({})
    .then((data) => {
      res.send({success: 'success', data: [], errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}
