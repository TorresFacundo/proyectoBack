const express = require('express');
const infoClase = require('../src/clases'); 
const routerClase = express.Router();

// GET /api/clases
routerClase.get('/', (req, res) => {
    res.json(infoClase); // Express envía el JSON automáticamente
});

module.exports = routerClase;
