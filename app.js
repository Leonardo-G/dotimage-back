const sequelize = require("./db/config");
const Server = require("./server/server");

const newServer = new Server();

sequelize.sync({force: true})
sequelize.authenticate()
    .then( c => console.log("Conectado") )
    .catch(e => console.log("ERROR\n", e))

newServer.server();

