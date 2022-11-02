const { DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lastName: {
        type: DataTypes.TEXT,
        defaultValue: ""
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = User;