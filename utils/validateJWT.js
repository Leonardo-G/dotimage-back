const { request, response } = require("express")
const jwt = require("jsonwebtoken")

const generateJWT = ( id, name ) => {   // es necesario el ID y el nombre del objeto USER

    return new Promise (( resolve, reject ) => {
        jwt.sign({ id, name }, process.env.PALABRA_SECRET, { expiresIn: "24h" }, ( err, token ) => {
            if ( err ){   
                reject("ERROR")
            }
            
            resolve( token )
        })
    })

}

//MIDDLEWARE, se trata de validar el token
const compareJWT = ( req = request, res = response, next ) => {

    const token = req.headers["token-auth"];

    jwt.verify( token, process.env.PALABRA_SECRET, ( err, tokenDecoded ) => {
        if ( err ){
            
            return res.status(401).json({
                msg: "Error en la autenticación del token",
                error: true,
                type: "TOKEN | ERROR"
            })
        }

        req.id = tokenDecoded.id

        next();
    } );

}

module.exports = {
    generateJWT,
    compareJWT
}