// criar a conexão do back end com o SQlite né?

const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false,
});

module.exports = sequelize;