const cors = require("cors");

const { check } = require("express-validator");
const { compareJWT } = require("../utils/validateJWT");
const { validateBody } = require("./validator");

const postNewUser = [
    cors(),
    check("name")
        .exists()
        .withMessage("El Nombre es requerido")
        .isLength({ min: 4, max: 20 })
        .withMessage("Se requiere minimo 4 caracteres y con un máximo de 20 carácteres"),
    check("email")
        .exists()
        .withMessage("El email es requerido")
        .isEmail()
        .withMessage("Tiene que ser un email válido"),
    check("password")
        .exists()
        .withMessage("Se requiere la contraseña")
        .isLength({ min: 6 })
        .withMessage("Se requiere como mínimo 6 caracteres"),
    validateBody
]

const postValidateToken = [
    compareJWT
]

const postLogin = [
    check("email")
        .exists()
        .withMessage("El email es requerido")
        .isEmail()
        .withMessage("Tiene que ser un email válido"),
    check("password")
        .exists()
        .withMessage("Se requiere la contraseña")
        .isLength({ min: 6 })
        .withMessage("Se requiere como mínimo 6 caracteres"),
    validateBody
]

module.exports = {
    postNewUser,
    postValidateToken,
    postLogin
}