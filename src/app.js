"use strict";
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();

// Conecta ao banco
mongoose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Carrega os Models
const Product = require("./models/product");
const Customer = require("./models/customer");
const Order = require("./models/order");

// Carrega as Rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");
const customerRoute = require("./routes/customer-route");
const orderRoute = require("./routes/order-route");

app.use(express.json({ limit: "50mb" }));

// Habilita o CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);

module.exports = app;
