const { Sequelize } = require("sequelize");
const db = new Sequelize("BACK-END-TODO", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate();
console.log("Connection has been established successfully.");

module.exports = db;
