const { request, response } = require("express");
const FavoriteAllDTO = require("../DTO/favorite");
const Favorite = require("../models/Favorite");

const newFavorite = async ( req = request, res = response ) => {
    const { favoriteId, type, urlImage } = req.body;

    const favorite = new Favorite({
        user_id: req.id,
        favoriteId,
        type,
        urlImage
    })

    await favorite.save();

    return res.status(201).json( favorite );
}

const getFavoritesForUser = async ( req = request, res = response ) => {
    let favorites = await Favorite.findAll({
        where: {
            user_id: req.id
        }
    })

    favorites = favorites.map( data => new FavoriteAllDTO( data ) );

    return res.status(200).json(favorites);
}

const deleteFavoriteForUser = async ( req = request, res = response ) => {
    const { idMedia } = req.params;

    await Favorite.destroy({
        where: {
            favoriteId: idMedia,
            user_id: req.id
        }
    })

    return res.status(200).json({
        msg: "ELIMINADO"
    })
}

module.exports = {
    newFavorite,
    getFavoritesForUser,
    deleteFavoriteForUser,
}