const { DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const Saved = sequelize.define( "Saved", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "users",
            key: "id"
        }
    },
    // id del archivo 
    savedId: {
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

},{
    timestamps: true
})

module.exports = Saved;