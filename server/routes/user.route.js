const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")

router.post("/register", controller.create)
router.post("/auth", controller.readOne)

module.exports = router
