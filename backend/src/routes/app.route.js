const express = require("express");
const router = express.Router();
const appController = require("../controllers/app.controller");

// router.get("/characters", appController.getCharacters);
router.get("/characters/:page", appController.getCharactersPerPage);
router.get("/character/:id", appController.getCharacterById);

module.exports = router;
