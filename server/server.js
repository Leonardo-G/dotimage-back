const express = require("express");
const sequelize = require("../db/config");
const dotenv = require("dotenv");

class Server {
    constructor(){
        this.PORT = 8000;
        this.app = express();
        this.router = {
            user: "/api/user"
        }

        this.middlewares();
        // this.sequelizeServer()
        this.routes()
    
    }

    middlewares(){
        dotenv.config()
        this.app.use( express.json() );
    }

    async sequelizeServer(){
        try {
            await sequelize.sync({ force: true })
            await sequelize.authenticate();
            console.log("Base de datos conectado");
        } catch (error) {
            console.log(error)
        }
    }

    routes(){
        this.app.use( this.router.user, require("../routes/user.js") );
    }

    server(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor iniciado");
        })
    }
}

module.exports = Server