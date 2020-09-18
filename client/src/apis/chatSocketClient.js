import io from 'socket.io-client';

const host = "http://127.0.0.1:3002";

const socket = io(host);

export default socket;