const express = require("express");
const { newSaved, getSavedForUser, deleteSavedForUser } = require("../controllers/saved");
const { postSaved, getSaved, deleteSaved } = require("../middlewares/saved");

const router = express.Router();

router.post( "new-media", postSaved, newSaved );

router.get( "/", getSaved, getSavedForUser );

router.delete( "/:idMedia", deleteSaved, deleteSavedForUser )

module.exports = router;