const express = require("express");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

io.sockets.on('connection', (socket) => {
  console.log('a user connected.');
  socket.broadcast.emit('hi');

  socket.on('privateMessage', (roomToken, chatMessage) => {
    io.to(roomToken.toString()).emit('chatMessage', chatMessage);
  });

  socket.on('joinRoom', (roomToken) => {
    socket.join(roomToken.toString());
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected.');
  })
});

io.sockets.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("joinRoom", (roomToken) => {
    socket.join(roomToken);
    socket.to(roomToken).broadcast.emit(`Welcome to room ${roomToken}`);
    console.log("welcome");
  });
  
  socket.on("roomChat", (roomToken, message) => {
    socket.to(roomToken).emit('chatMessage', message);
  });

  socket.on("videoControlRequest", (roomToken, isPlay) => {
    socket.to(roomToken).emit('videoControl', isPlay);
  });

  socket.on("addToPlaylist", (roomToken, playlistItem) => {
    console.log(roomToken, playlistItem);
    console.log(io.sockets.adapter.rooms);
    io.sockets.to(roomToken.toString()).emit("addToPlaylist", playlistItem);
    //socket.emit("addToPlaylist", playlistItem);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

server.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`);
});
