const noteService = require('../services/notesService');

module.exports = (socket) => {
  // Send all messages to the client
  const emitNotes = async () => {
    const notes = await noteService.getNotes();
    socket.emit("server:loadnotes", notes);
  };
  emitNotes();

  socket.on("client:newnote", async (data) => {
    const savedNote = await noteService.saveNote(data);
    socket.emit("server:newnote", savedNote);
  });

  socket.on("client:deletenote", async (noteId) => {
    await noteService.deleteNote(noteId);
    emitNotes();
  });

  socket.on("client:getnote", async (noteId) => {
    const note = await noteService.getNote(noteId);
    socket.emit("server:selectednote", note);
  });

  socket.on("client:updatenote", async (updatedNote) => {
    await noteService.updateNote(updatedNote);
    emitNotes();
  });
};