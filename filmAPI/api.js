const express = require("express");
const cors = require("cors");
require("dotenv").config();

const filmRouter = require("./routers/film");
const logRoutes = require("./middleware/logger");



const api = express();

api.use(cors());
api.use(express.json());


api.use("/films", filmRouter);


api.use(logRoutes);



// Request to check token


module.exports = api;