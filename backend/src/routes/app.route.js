const express = require("express");
const router = express.Router();
const appController = require("../controllers/app.controller");

// router.get("/characters", appController.getCharacters);
router.get("/characters/:page", appController.getCharactersPerPage);
router.get("/character/id/:id", appController.getCharacterById);
router.get("/character/name/:name", appController.getCharacterByName);
router.get("/random/characters", appController.getRandomCharacters);

// -------

// router.get("/organize/characters/:by", appController.getCharacterByName);

module.exports = router;
