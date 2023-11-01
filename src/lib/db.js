const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to db");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
