const jwt = require("jsonwebtoken")

const generateJWT = ( id, name ) => {   // es necesario el ID y el nombre del objeto USER

    return new Promise (( resolve, reject ) => {
        jwt.sign({ id, name }, process.env.PALABRA_SECRET, { expiresIn: "24h" }, ( err, token ) => {
            if ( err ){   
                reject("ERROR")
            }
            
            resolve(token)
        })
    })

}

module.exports = {
    generateJWT
}