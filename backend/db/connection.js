const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "db/TodoItems.db",
});

module.exports = db;
