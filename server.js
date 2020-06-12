const express = require("express");

const FoodsRouter = require("./foods/foods-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/foods", FoodsRouter);

module.exports = server;