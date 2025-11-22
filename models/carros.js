const Sequelize = require("sequelize");
const db = require("../db/conection");

const Carro = db.define("carros", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING,
    },
    estado: {
        type: Sequelize.STRING,
    },
    ano: {
        type: Sequelize.FLOAT,
    },
    favoritos: {
        type: Sequelize.BOOLEAN,
    },
});

module.exports = Carro;

