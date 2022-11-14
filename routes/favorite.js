const express = require("express");

const { 
    newFavorite, 
    getFavoritesForUser, 
    deleteFavoriteForUser
} = require("../controllers/favorite");

const { 
    postFavorite, 
    getFavorites, 
    deleteFavorites
} = require("../middlewares/favorite");

const router = express.Router();

router.post( "/new", postFavorite, newFavorite );

//Obtener todos los favoritos del usuario;
router.get( "/", getFavorites, getFavoritesForUser );

router.delete( "/:idMedia", deleteFavorites, deleteFavoriteForUser );

module.exports = router;