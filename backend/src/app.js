const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Import the connectDB function
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/items', itemRoutes);

// Establish MongoDB connection by calling connectDB
connectDB().then(() => {
  console.log('Database connected successfully');
  
  // Define a route handler for the root path
  app.get('/', (req, res) => {
    res.send('Welcome to the MERN CRUD Backend!');
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
  process.exit(1); // Exit process with failure
});
