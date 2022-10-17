const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Todo = db.define("todo", {
  nama_todo: DataTypes.STRING,
  tanggal_todo: DataTypes.STRING,
  gambar_todo: DataTypes.STRING,
});

Todo.sync();
console.log("Table database berhasil dibuat");
module.exports = Todo;
