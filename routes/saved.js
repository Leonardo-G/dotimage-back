const express = require("express");
const { newSaved, getSavedForUser } = require("../controllers/saved");
const { postSaved, getSaved } = require("../middlewares/saved");

const router = express.Router();

router.post( "new-media", postSaved, newSaved );

router.get( "/", getSaved, getSavedForUser );

module.exports = router;