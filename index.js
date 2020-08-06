require("dotenv").config(); // if there is a .env on the root folder it will merge

const express = require("express");

const server = express();

server.get("/", function (req, res) {
  const message = process.env.MESSAGE || "hellerrrrr";
  res.status(200).json({ message, database: process.env.DB_NAME });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("server up on 8k"));
