const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  const students = [
    { id: 1, name: 'Alice', grade: 8 },
    { id: 2, name: 'Bob', grade: 9 },
    { id: 3, name: 'Charlie', grade: 7 }
  ];
  res.send(students);
});

module.exports = router;
