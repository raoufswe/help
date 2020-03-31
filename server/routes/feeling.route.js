const express = require("express")
const router = express.Router()
const controller = require("../controllers/feeling.controller")

router.post("/", controller.feeling_create)
router.put("/:userID/:id", controller.feeling_update)
router.get("/:userID", controller.feelings_get)
router.delete("/:userID", controller.feelings_delete) // use with caution, it's gonna delete everything

module.exports = router
