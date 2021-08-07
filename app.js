const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Hello About');
});

app.get('/contact', (req, res) => {
  res.send('COntact');
});

module.exports = app;
