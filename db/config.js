const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dotimages", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;