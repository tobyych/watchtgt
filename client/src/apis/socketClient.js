import io from "socket.io-client";

const port = process.env.PORT || 5000
const host = `http://localhost:${port}`;

const socket = io(host);

socket.connect();

if (sessionStorage.getItem("roomToken")) {
    console.log(`joining room ${sessionStorage.getItem("roomToken")}`)
    socket.emit('joinRoom', sessionStorage.getItem("roomToken"))
}

export default socket;
