"use strict";
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(
  "mongodb+srv://mateustrgn:mateus@cluster0-uxcvv.gcp.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Carrega as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(express.json());

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
