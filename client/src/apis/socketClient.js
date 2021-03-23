import io from "socket.io-client";

const host = "http://192.168.87.71:3001";

const socket = io(host);

socket.connect();

export default socket;
