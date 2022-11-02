const { DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(20),
        defaultValue: ""
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.TEXT,
        defaultValue: ""
    }
})

module.exports = User;