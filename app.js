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

app.get('/demo', (req, res) => {
  res.send('demo');
});

module.exports = app;
