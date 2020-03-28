const express = require("express")
const router = express.Router()
const controller = require("../controllers/journal.controller")

router.post("/", controller.journal_create)
router.get("/:id", controller.journal_get)
router.put("/:id", controller.journal_update)
router.delete("/:id", controller.journal_delete)
router.get("/", controller.journals_get)
router.delete("/", controller.journals_delete) // use with caution, it's gonna delete everything

module.exports = router
