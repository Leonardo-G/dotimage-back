const sequelize = require("./db/config");
const Favorite = require("./models/Favorite");
const Saved = require("./models/Saved");
const User = require("./models/User");
const Server = require("./server/server");

const newServer = new Server();

//Uno a muchos USER ==> Favorite
User.hasMany( Favorite );
Favorite.belongsTo( User, { constraints: true, onDelete: "CASCADE" } );

// Uno a muchos USER ==> Saved
User.hasMany( Saved );
Saved.belongsTo( User, { constraints: true, onDelete: "CASCADE" } );

sequelize.sync();
sequelize.authenticate()
    .then( c => console.log("Conectado") )
    .catch(e => console.log("ERROR\n", e))

newServer.server();

