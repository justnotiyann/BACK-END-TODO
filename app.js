var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejsLayout = require("express-ejs-layouts");

var app = express();
app.listen(3000, () => {
  console.log("server berjalan");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + "public"));

var indexRouter = require("./routes/index");
app.use("/", indexRouter);

module.exports = app;
