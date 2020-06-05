const express = require('express')
const router = express.Router()
const controller = require('../controllers/notifications.controller.js')

router.get('/:userID/:deviceToken', controller.get_notification_device)
router.put('/:userID/:deviceToken', controller.update_notification_device)
router.get('/:userID', controller.get_notification_devices)

module.exports = router
