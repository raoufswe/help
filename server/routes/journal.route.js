const express = require("express")
const router = express.Router()
const controller = require("../controllers/journal.controller")

router.post("/", controller.journal_create)
router.get("/:userID/:id", controller.journal_get)
router.put("/:userID/:id", controller.journal_update)
router.delete("/:userID/:id", controller.journal_delete)
router.get("/:userID", controller.journals_get)
router.delete("/:userID", controller.journals_delete) // use with caution, it's gonna delete everything

module.exports = router
