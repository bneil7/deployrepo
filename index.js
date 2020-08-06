const express = require("express");

const server = express();

server.get("/", function (req, res) {
  res.status(200).json({ message: "what up world" });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log("server up on 8k"));
