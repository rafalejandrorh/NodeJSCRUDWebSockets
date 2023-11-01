const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Note = mongoose.model('Note', schema);

module.exports = Note;
