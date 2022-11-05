const sequelize = require("./db/config");
const Favorite = require("./models/Favorite");
const User = require("./models/User");
const Server = require("./server/server");

const newServer = new Server();

User.hasMany( Favorite );
Favorite.belongsTo( User, { constraints: true, onDelete: "CASCADE" } );

sequelize.sync({force: true});
sequelize.authenticate()
    .then( c => console.log("Conectado") )
    .catch(e => console.log("ERROR\n", e))

newServer.server();

