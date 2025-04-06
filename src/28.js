// Create a new Node.js file with a name like "MySchoolProject"
const express = require('express');
const app = express();
app.use(express.json());

// Define a route to get all users in the system
app.get('/users', (req, res) => {
  // Get all user objects from a database or any other source
  // Example: users = await User.find({});
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  
  res.json(users);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
