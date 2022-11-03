const sequelize = require("./db/config");
const Favorite = require("./models/Favorite");
const User = require("./models/User");
const Server = require("./server/server");

const newServer = new Server();

Favorite.belongsTo( User, { constraints: true, onDelete: "CASCADE" } );
User.hasMany( Favorite );

sequelize.sync({force: true});
sequelize.authenticate()
    .then( c => console.log("Conectado") )
    .catch(e => console.log("ERROR\n", e))

newServer.server();

