const express = require('express')
const router = express.Router()
const controller = require('../controllers/task.controller')

router.post('/', controller.create_task)
router.get('/:userID/:taskID', controller.get_task)
router.put('/:userID/:taskID', controller.update_task)
router.delete('/:userID/:taskID', controller.delete_task)
router.get('/:userID', controller.get_tasks)
router.delete('/', controller.delete_tasks) // use with caution, it's gonna delete everything

module.exports = router
