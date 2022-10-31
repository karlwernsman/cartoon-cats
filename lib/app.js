const express = require('express');

const app = express();
const { cats } = require('./cats-data.js');

app.use('/howdy', (req, res) => {
  res.send('hello world!');
});

app.use('/cats', (req, res) => {
  const filteredCatInfo = [];
  for (const cat of cats) {
    filteredCatInfo.push({ id: cat.id, name: cat.name });
  }
  res.json(filteredCatInfo);
});

module.exports = app;
