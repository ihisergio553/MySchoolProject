// Create a new Express app
const express = require('express');
const app = express();

// Set the port to use
const port = 3000;

// Define the route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
