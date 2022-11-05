// Archivo para los middlewares de la ruta /SAVED //
const { check } = require("express-validator");
const { compareJWT } = require("../utils/validateJWT");
const { validateBody } = require("./validator");

const postSaved = [
    check("savedId")
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

const getSaved = [
    compareJWT
]

const deleteSaved = [
    check("idMedia")
        .exists()
        .withMessage("Se necesita el ID del archivo media"),
    validateBody,
    compareJWT
]

module.exports = { 
    postSaved,
    getSaved,
    deleteSaved
}