const express = require("express")
const router = express.Router()
const controller = require("../controllers/feeling.controller")

router.post("/", controller.feeling_create)
router.get("/:userID/:week", controller.feeling_get)
router.put("/:userID/:week", controller.feeling_update)
router.delete("/:userID/:week", controller.feeling_delete)
router.get("/:userID", controller.feelings_get)
router.delete("/", controller.feelings_delete) // use with caution, it's gonna delete everything

module.exports = router
