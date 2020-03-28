const express = require("express")
const router = express.Router()
const controller = require("../controllers/grateful.controller")

router.post("/", controller.grateful_create)
router.get("/:id", controller.grateful_get)
router.put("/:id", controller.grateful_update)
router.delete("/:id", controller.grateful_delete)
router.get("/", controller.grateful_getAll)
router.delete("/", controller.grateful_deleteAll) // use with caution, it's gonna delete everything

module.exports = router