const express = require('express')
const router = express.Router()
const controller = require('../controllers/grateful.controller')

router.post('/', controller.grateful_create)
router.get('/:userID/:id', controller.grateful_get)
router.put('/:userID/:id', controller.grateful_update)
router.delete('/:userID/:id', controller.grateful_delete)
router.get('/:userID', controller.grateful_getAll)
router.delete('/:userID', controller.grateful_deleteAll) // use with caution, it's gonna delete everything

module.exports = router
