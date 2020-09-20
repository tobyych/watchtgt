import io from "socket.io-client";

const host = "http://localhost:3001";

const socket = io(host);

export default socket;
