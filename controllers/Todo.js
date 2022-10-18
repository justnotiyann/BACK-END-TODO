const Todo = require("../models/Todo");

const getAllTodo = async (req, res) => {
  try {
    const result = await Todo.findAll({});
    if (!result) res.status(400).json({ msg: "Data tidak ditemukan" });
    if (result <= 0) res.status(200).json({ msg: "Belum ada todo" });
    res.status(200).json({ msg: "Berikut todo listnya", result });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi Kesalahan" });
  }
};

const addTodo = async (req, res) => {
  try {
    const result = await Todo.create({ ...req.body });
    if (!result) res.status(400).json({ msg: "Gagal menambahkan data" });
    res.status(200).json({ msg: "Berhasil menambahkan data" });
  } catch (e) {
    res.status(500).json({ msg: "Server Error" + e });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Todo.destroy({ where: { id: id } });
    if (!result) res.status(404).json({ msg: "Data tidak ditemukan" });
    res.status(200).json({ msg: "Berhasil menghapus todo !" });
  } catch (e) {
    res.status(500).json({ msg: "Server Error" + e });
  }
};

const editTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const searchTodo = await Todo.findOne({ where: { id: id } });
    if (!searchTodo) res.status(404).json({ msg: "Data tidak ditemukan" });
    const result = await Todo.update({ ...req.body }, { where: { id: id } });
    if (!result) res.status(400).json({ msg: "Gagal edit todo" });
    res.status(200).json({ msg: "Berhasil edit todo" });
  } catch (e) {
    res.status(500).json({ msg: "Server Error" + e });
  }
};

module.exports = { getAllTodo, addTodo, deleteTodo, editTodo };
