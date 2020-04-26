const express = require('express')
const router = express.Router()
const controller = require('../controllers/grateful.controller')

router.post('/', controller.create_grateful)
router.get('/:userID/:id', controller.get_grateful)
router.put('/:userID/:id', controller.update_grateful)
router.delete('/:userID/:id', controller.delete_grateful)
router.get('/:userID', controller.get_all_grateful)
router.delete('/:userID', controller.delete_all_grateful) // use with caution, it's gonna delete everything

module.exports = router
