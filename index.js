const express = require("express");
const path = require("path");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

io.sockets.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("joinRoom", (roomToken) => {
    socket.join(roomToken);
    io.sockets.to(roomToken).emit(`Welcome to room ${roomToken}`);
    console.log(`client ${socket.id} has joined room ${roomToken}`);
  });

  socket.on("roomChat", (roomToken, message) => {
    socket.to(roomToken).emit('chatMessage', message);
  });

  socket.on("videoControlRequest", (roomToken, isPlay) => {
    io.sockets.to(roomToken).emit('videoControl', isPlay);
  });

  socket.on("addToPlaylist", (roomToken, playlistItem) => {
    io.sockets.to(roomToken).emit("addToPlaylist", playlistItem);
  });

  socket.on("changeVideoRequest", (roomToken, videoId) => {
    io.sockets.to(roomToken).emit("changeVideo", videoId);
  })

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

server.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`);
});
