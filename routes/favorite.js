const express = require("express");
const { check } = require("express-validator");
const { newFavorite } = require("../controllers/favorite");
const { validateBody } = require("../middlewares/validator");
const { compareJWT } = require("../utils/validateJWT");

const router = express.Router();

router.post( "/new", [
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
], newFavorite )



module.exports = router;