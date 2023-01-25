const express = require("express");
const router = express.Router();
const appController = require("../controllers/app.controller");

router.get("/characters/:page", appController.getCharactersPerPage);
router.get("/character/id/:id", appController.getCharacterById);
router.get("/character/name/:name", appController.getCharacterByName);
router.get("/random/characters", appController.getRandomCharacters);

module.exports = router;
