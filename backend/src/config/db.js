// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mern-crud', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Use new options to suppress deprecation warnings
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Connection to MongoDB failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
