const brcyptjs = require("bcryptjs");

const hashPassword = ( password ) => {
    const salt = brcyptjs.genSaltSync(10);
    const hash = brcyptjs.hashSync(password, salt);

    return hash
}

const comparePassword = ( password, passwordHash ) => {
    
    return brcyptjs.compareSync( password, passwordHash );
}

module.exports = {
    hashPassword,
    comparePassword
}