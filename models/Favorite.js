const { DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const Favorite = sequelize.define("Favorite", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id"
        }
    },
    // id del archivo 
    favoriteId: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // Tipo de archivo
    type: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    //Url de del archivo
    urlImage: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Favorite