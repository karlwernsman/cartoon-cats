const { Router } = require('express');
const { cats } = require('../cats-data.js');

module.exports = Router()
  .get('/:id', (req, res) => {
    let equal;
    for (const cat of cats) {
      if (cat.id === req.params.id) {
        equal = cat;
      }
    }
    res.json(equal);
  })
  .get('/', (req, res) => {
    const filteredCatInfo = [];
    for (const cat of cats) {
      filteredCatInfo.push({ id: cat.id, name: cat.name });
    }
    res.json(filteredCatInfo);
  });
