const { request, response } = require("express");
const { validationResult } = require("express-validator");

const validateBody = ( req = request, res = response, next ) => {
    const error = validationResult( req );
    
    if ( !error.isEmpty() ){
        
        return res.status(400).json({ errors: error.array() })
    }
    
    next();
}

module.exports = {
    validateBody
}