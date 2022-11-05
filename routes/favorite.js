const express = require("express");
const { newFavorite, getFavoritesForUser } = require("../controllers/favorite");
const { postFavorite, getFavorites } = require("../middlewares/favorite");

const router = express.Router();

router.post( "/new", postFavorite, newFavorite )

router.get( "/", getFavorites, getFavoritesForUser )



module.exports = router;