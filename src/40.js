// mySchoolProject.js
const express = require('express');
const app = express();
app.use(express.static('public'));

// Home page route
app.get('/', (req, res) => {
  res.send('Welcome to My School Project!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
