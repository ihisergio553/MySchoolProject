// This is just an example of how you might start to build a Node.js application.
// In practice, you would use a package manager like npm or yarn to install dependencies and setup your project structure.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
