const express = require('express');
const router = express.Router();
const { infoEjercicios } = require('../src/ejercicios'); // ajustar el path según tu estructura

router.get('/', (req, res) => {
  res.json(infoEjercicios);
});

module.exports = router;
