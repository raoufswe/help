const express = require('express')
const router = express.Router()
const controller = require('../controllers/feeling.controller')

router.get('/:userID/:id', controller.get_feeling)
router.put('/:userID', controller.update_feeling)
router.delete('/:userID/:id', controller.delete_feeling)
router.get('/:userID', controller.get_feelings)
router.delete('/', controller.delete_feelings) // use with caution, it's gonna delete everything

module.exports = router
