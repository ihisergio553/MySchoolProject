const express = require('express');
const app = express();
app.use(express.static('public'));

// Your code here

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
