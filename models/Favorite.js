const { DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const Favorite = sequelize.define("Favorite", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id"
        }
    },
    favoriteId: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    urlImage: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Favorite