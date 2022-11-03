const { request, response } = require("express");

const User = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/passwordHash");
const { generateJWT } = require("../utils/validateJWT");

const newUser = async ( req = request, res = response ) => {
    let { name, lastname = "", email, password } = req.body;

    password = hashPassword( password );
    console.log(password)
    const isExist = await User.findOne({
        where: { email: email }
    })

    if ( isExist ) {
        return res.status(400).json({
            msg: `El usuario con el correo ${ email }, ya existe`
        })
    }

    const user = new User({ name, lastname, email, password });
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

const loginUser = async ( req = request, res = response ) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        where: { email }
    })

    if ( !user ) {
        return res.status(401).json({
            msg: "Contraseña/email incorrecta",
            error: true,
            type: "ERROR | USER NO ENCONTRADO"
        })
    }

    if ( !comparePassword( password, user.password ) ){
        return res.status(401).json({
            msg: "Contraseña/email incorrecta",
            error: true,
            type: "ERROR | INVALID PASSWORD"
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
    compareToken,
    loginUser
}