const User = require('../schemas/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register_user = function (req, res) {
  let user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    gender: req.body.gender,
  }
  User.create(user)
    .then((User) => {
      res.send({
        success: true,
        token: jwt.sign(
          {
            id: User._id,
            name: User.name,
            gender: User.gender,
          },
          req.app.get('secretKey'),
          {expiresIn: '24h'},
        ),
      })
    })
    .catch((err) => {
      res.send({success: false, result: [], errors: err})
      console.log(err)
    })
}

exports.google_user = function (req, res) {
  User.findOne({googleId: req.body.googleId}).then((currentUser) => {
    if (currentUser) {
      res.send({
        success: true,
        token: jwt.sign(
          {
            id: currentUser._id,
            name: currentUser.name,
          },
          req.app.get('secretKey'),
          {expiresIn: '24h'},
        ),
      })
    } else {
      new User({
        googleId: req.body.googleId,
        name: req.body.name,
        email: req.body.email,
      })
        .save()
        .then((newUser) => {
          res.send({
            success: true,
            token: jwt.sign(
              {
                id: newUser.googleId,
                name: newUser.name,
              },
              req.app.get('secretKey'),
              {expiresIn: '24h'},
            ),
          })
        })
    }
  })
}

exports.facebook_user = (req, res) => {
  User.findOne({
    facebookId: req.body.facebookId,
  })
    .then((user) => {
      console.log('current user', user)
      if (user) {
        res.send({
          success: true,
          token: jwt.sign(
            {
              id: user._id,
              name: user.name,
              gender: user.gender,
            },
            req.app.get('secretKey'),
            {expiresIn: '24h'},
          ),
        })
      } else {
        console.log('new user')
        new User({
          facebookId: req.body.facebookId,
          name: req.body.name,
          gender: req.body.gender,
        })
          .save()
          .then((newUser) => {
            res.send({
              success: true,
              token: jwt.sign(
                {
                  id: newUser._id,
                  name: newUser.name,
                  gender: newUser.gender,
                },
                req.app.get('secretKey'),
                {expiresIn: '24h'},
              ),
            })
          })
      }
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: err})
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
          res.send({success: false, result: [], errors: err})
        } else {
          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            res.json({
              success: true,
              token: jwt.sign(
                {
                  id: userInfo._id,
                  name: userInfo.name,
                  gender: userInfo.gender,
                },
                req.app.get('secretKey'),
                {expiresIn: '24h'},
              ),
            })
          } else {
            res.send({success: false, result: [], errors: err})
          }
        }
      },
    )
  } else {
    res.send({success: false, result: [], errors: err})
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
  User.deleteMany({})
    .then((data) => {
      res.send({success: 'success', data: [], errors: []})
      console.log(data)
    })
    .catch((err) => {
      res.send({success: false, data: [], errors: [err]})
      console.log(err)
    })
}
