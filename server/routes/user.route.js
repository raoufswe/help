const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')

router.post('/register', controller.register_user)
router.post('/auth', controller.auth_user)
router.post('/google', controller.google_user)
router.post('/facebook', controller.facebook_user)
router.get('/', controller.get_users)
router.delete('/', controller.delete_users)

module.exports = router
