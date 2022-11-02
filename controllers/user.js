const { request, response } = require("express");
const brcyptjs = require("bcryptjs");
const User = require("../models/User");

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

    return res.status(201).json( user );
}

module.exports = {
    newUser
}