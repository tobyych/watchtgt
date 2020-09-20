const express = require("express");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`);
});
