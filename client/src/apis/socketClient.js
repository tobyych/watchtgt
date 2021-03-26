import io from "socket.io-client";

const host = "http://localhost:3001";

const socket = io(host);

socket.connect();

if (sessionStorage.getItem("roomToken")) {
    console.log(`joining room ${sessionStorage.getItem("roomToken")}`)
    socket.emit('joinRoom', sessionStorage.getItem("roomToken"))
}

export default socket;
