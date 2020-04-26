const express = require('express')
const router = express.Router()
const controller = require('../controllers/journal.controller')

router.post('/', controller.create_journal)
router.get('/:userID/:id', controller.get_journal)
router.put('/:userID/:id', controller.update_journal)
router.delete('/:userID/:id', controller.delete_journal)
router.get('/:userID', controller.get_journals)
router.delete('/:userID', controller.delete_journals) // use with caution, it's gonna delete everything

module.exports = router
