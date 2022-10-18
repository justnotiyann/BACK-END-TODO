var express = require("express");
var router = express.Router();
const controllers = require("../controllers/Todo");

/* GET home page. */
router.get("/gettodo", controllers.getAllTodo);
router.post("/addtodo", controllers.addTodo);
router.get("/deletetodo/:id", controllers.deleteTodo);
router.post("/edittodo/:id", controllers.editTodo);

// Tinggal gambar file login validasi
module.exports = router;
