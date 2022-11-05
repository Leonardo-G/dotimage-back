const { request, response } = require("express");
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

module.exports = {
    newFavorite
}