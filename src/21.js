// Example of a Node.js server that listens on localhost:3000

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
    res.send('Hello, this is the data for your application!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
