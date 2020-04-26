const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const CLIENT_DASHBOARD = 'http://localhost:8100/dashboard'
const CLIENT_LOGIN = 'http://localhost:8100/login'

router.post('/register', controller.register_user)
router.post('/auth', controller.auth_user)
router.get('/', controller.get_users)
router.delete('/', controller.delete_users)

router.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  }),
)

router.get(
  '/google/redirect',
  passport.authenticate('google', {
    failureRedirect: CLIENT_LOGIN,
    session: false,
  }),
  (req, res) => {
    return res
      .status(200)
      .cookie(
        'token',
        jwt.sign(
          {
            id: req.user.id,
            name: req.user.name,
          },
          req.app.get('secretKey'),
          {expiresIn: '24h'},
        ),
      )
      .redirect(CLIENT_DASHBOARD)
  },
)

router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile'],
  }),
)

router.get(
  '/facebook/redirect',
  passport.authenticate('facebook', {
    failureRedirect: CLIENT_LOGIN,
    session: false,
  }),
  (req, res) => {
    return res
      .status(200)
      .cookie(
        'token',
        jwt.sign(
          {
            id: req.user.id,
            name: req.user.name,
          },
          req.app.get('secretKey'),
          {expiresIn: '24h'},
        ),
      )
      .redirect(CLIENT_DASHBOARD)
  },
)

module.exports = router
