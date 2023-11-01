const Notes = require('../listeners/notes');

module.exports = (io) => {
  io.on("connection", (socket) => {
    // console.log(socket.handshake.url);
    console.log("nuevo socket connectado:", socket.id);

    Notes(socket);

    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });
  });
};
