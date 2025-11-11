const express = require('express')

const routerApiPrincipal = express.Router();

const fs = require('node:fs');
const HOME = fs.readFileSync('./index.html');
const ABOUT = fs.readFileSync('./about.html');

routerApiPrincipal.get('/', (req, res) => {
  res.send(HOME)
});

module.exports = routerApiPrincipal;
