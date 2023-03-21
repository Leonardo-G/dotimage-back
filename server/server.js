const express = require("express");
const sequelize = require("../db/config");
const dotenv = require("dotenv");
const cors = require("cors"); 

const { 
    userRoute, 
    favoriteRoute, 
    saveRoute
} = require("../routes");

class Server {
    constructor(){
        this.PORT = process.env.PORT || 8000;
        this.app = express();
        this.router = {
            user: "/api/user",
            favorite: "/api/favorite",
            save: "/api/saved"
        }

        this.middlewares();
        // this.sequelizeServer()
        this.routes()
    
    }

    middlewares(){
        dotenv.config()
        this.app.use( cors() )
        this.app.use( express.json() );
    }

    async sequelizeServer(){
        try {
            await sequelize.authenticate();
            console.log("Base de datos conectado");
        } catch (error) {
            console.log(error)
        }
    }

    routes(){
        this.app.use( this.router.user, userRoute );
        this.app.use( this.router.favorite, favoriteRoute );
        this.app.use( this.router.save, saveRoute );
    }

    server(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor iniciado");
        })
    }
}

module.exports = Server