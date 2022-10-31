const express = require('express');

const app = express();
const { cats } = require('./cats-data.js');

app.use('/howdy', (req, res) => {
  res.send('hello world!');
});

app.use('/cats/:id', (req, res) => {
  let equal;
  for (const cat of cats) {
    if (cat.id === req.params.id) {
      equal = cat;
    }
  }
  res.json(equal);
});

app.use('/cats', (req, res) => {
  const filteredCatInfo = [];
  for (const cat of cats) {
    filteredCatInfo.push({ id: cat.id, name: cat.name });
  }
  res.json(filteredCatInfo);
});

module.exports = app;
