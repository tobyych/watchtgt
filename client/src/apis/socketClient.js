import io from "socket.io-client";

const host = "http://127.0.0.1:3001";

const socket = io(host);

socket.connect();

export default socket;
