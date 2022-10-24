const express = require("express");
const app = express();
const cors = require("cors");
const router = require('./Routes/Router');

app.use(router);
app.use(cors());

module.exports = app;