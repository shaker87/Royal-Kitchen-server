const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// --------------------- own --------------------
require("dotenv").config();
const db = require("./DB/DB");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// --------------- own routers-----------------------------
const foodRouter = require("./routes/FoodRouter");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// -------------------------- own ------------------------
app.use("/food", foodRouter);

module.exports = app;
