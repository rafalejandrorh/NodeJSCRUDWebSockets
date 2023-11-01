const { Server } = require('socket.io');
const http = require('http');
const Sockets = require('./sockets');
const app = require('./app');
const db = require('./lib/db');
const { PORT } = require('./config');

db();
const server = http.createServer(app);
const httpServer = server.listen(PORT);
const io = new Server(httpServer);

Sockets(io);
console.log(`Server on http://localhost:${PORT}`);