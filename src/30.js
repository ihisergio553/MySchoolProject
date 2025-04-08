const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to MySchoolProject!</h1>
    <p>This is a simple school project repository.</p>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
