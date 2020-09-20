const express = require("express");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("createRoom", (roomToken) => {
    socket.join(roomToken);
    socket.to(roomToken).emit(`Welcome to room ${roomToken}`)
  })

  socket.on("roomChat", (roomToken, message) => {
    socket.to(roomToken).emit(message);
  })

  socket.on("videoControl", (roomToken, isPlay) => {
    console.log(roomToken)
    console.log(isPlay)
    socket.to(roomToken).emit(isPlay);
  })

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`);
});
