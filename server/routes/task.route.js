const express = require('express')
const router = express.Router({mergeParams: true})
const controller = require('../controllers/task.controller')
const incompleteRouter = express.Router({mergeParams: true})
const completedRouter = express.Router({mergeParams: true})

router.use('/:userID/incomplete', incompleteRouter)
router.use('/:userID/completed', completedRouter)

router.post('/', controller.create_task)
router.get('/:userID/:id', controller.get_task)
router.put('/:userID/:id', controller.update_task)
router.delete('/:userID/:id', controller.delete_task)
router.get('/:userID', controller.get_user_tasks)
router.get('/', controller.get_tasks)
router.delete('/', controller.delete_tasks) // use with caution, it's gonna delete everything

incompleteRouter.get('/', controller.get_incomplete_tasks)
completedRouter.get('/', controller.get_completed_tasks)

module.exports = router
