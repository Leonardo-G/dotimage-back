// Archivo para los middlewares de la ruta /FAVORITE //
const { check } = require("express-validator");
const { compareJWT } = require("../utils/validateJWT");
const { validateBody } = require("./validator");

const postFavorite = [
    check("favoriteId")
        .exists()
        .withMessage("Se necesita el Id del archivo"),
    check("type")
        .exists()
        .isIn(["image", "video", "gifs", "sticker"])
        .withMessage("Tiene que ser un TYPE válido"),
    check("urlImage")
        .exists()
        .withMessage("Se necesita tener urlImage"),
    validateBody,
    compareJWT
]

const getFavorites = [
    compareJWT
]

module.exports = { 
    postFavorite,
    getFavorites
}