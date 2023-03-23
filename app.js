const express = require('express');
const path = require('path');

const app = express();

app.get('/cleo', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'images', 'cleo.jpeg'));
})

app.get('/nita', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'images', 'nita.jpeg'));
})

app.get('/feli', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'images', 'feli.jpeg'));
})

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
  });

 