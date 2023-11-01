const Note = require('../models/Note');

// Send all notes to the client
const getNotes = async () => {
    return await Note.find();
};

const saveNote = async (data) => {
    const newNote = new Note(data);
    return await newNote.save();
};

const deleteNote = async (noteId) => {
    await Note.findByIdAndDelete(noteId);
};

const getNote = async (noteId) => {
    return await Note.findById(noteId);
};

const updateNote = async (updatedNote) => {
    await Note.findByIdAndUpdate(updatedNote._id, {
    title: updatedNote.title,
    description: updatedNote.description,
    });
};

module.exports = {
    getNotes,
    saveNote,
    deleteNote,
    getNote,
    updateNote
}
