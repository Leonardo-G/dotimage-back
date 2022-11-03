const { request, response } = require("express");
const brcyptjs = require("bcryptjs");

const User = require("../models/User");
const { generateJWT } = require("../utils/validateJWT");

const newUser = async ( req = request, res = response ) => {
    const { name, lastname = "", email, password } = req.body;

    const salt = brcyptjs.genSaltSync(10);
    const hash = brcyptjs.hashSync(password, salt);

    const isExist = await User.findOne({
        where: { email: email }
    })

    if ( isExist ) {
        return res.status(400).json({
            msg: `El usuario con el correo ${ email }, ya existe`
        })
    }

    const user = new User({ name, lastname, email, password: hash });
    await user.save();

    const userToken = await generateJWT( user.id, user.name ); // Devuelve "ERROR", en caso de que haya un error al generar el token

    if ( userToken === "ERROR" ){
        return res.status(500).json({
            msg: "Error al validar el token"
        })
    }

    return res.status(201).json({
        name: user.name,
        lastname: user.name,
        email: user.email,
        token: userToken
    });
}

const compareToken = async ( req = request, res = response ) => {

    const user = await User.findOne({
        where: { id: req.id }
    })

    if ( !user ) {
        return res.status(401).json({
            msg: "No se encuentra el usuario con el token enviado",
            error: true,
            type: "ERROR | USER NO ENCONTRADO"
        })
    }

    const userToken = await generateJWT( user.id, user.name ); // Devuelve "ERROR", en caso de que haya un error al generar el token

    if ( userToken === "ERROR" ){
        return res.status(500).json({
            msg: "Error al validar el token"
        })
    }

    return res.status(201).json({
        name: user.name,
        lastname: user.name,
        email: user.email,
        token: userToken
    });
}

module.exports = {
    newUser,
    compareToken
}