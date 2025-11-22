const Sequelize = require("sequelize");
const db = require("../db/conection");

const Car = db.define("car", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    modelo: {
        type: Sequelize.STRING
    },
    marca: {
        type: Sequelize.STRING
    },
    ano: {
        type: Sequelize.INTEGER
    },
    estado: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    favorito: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Car;

