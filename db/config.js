const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("dotimages", process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
})

module.exports = sequelize;