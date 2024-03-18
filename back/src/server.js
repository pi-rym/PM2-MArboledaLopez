const express = require ("express");
const router = require ("./routes/routes");
const morgan = require ("morgan");
const cors = require("cors");

const app = express ();

//middleware
app.use(morgan("dev"));
app.use (cors());
app.use(express.json());


app.use (router);

module.exports = app;