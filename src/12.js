const express = require('express');
const app = express();
app.get('/', function(req, res) {
    const randomNumber = Math.floor(Math.random() * 10);
    res.send(`Your lucky number is ${randomNumber}.`);
});
