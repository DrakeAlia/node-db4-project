const express = require("express");

const FoodsRouter = require("./foods/foods-router");
const IngredientsRouter = require("./foods/ingredients-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/foods", FoodsRouter);
server.use('/api/ingredients', IngredientsRouter)

module.exports = server;