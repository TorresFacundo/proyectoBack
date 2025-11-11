const express = require('express');
const router = express.Router();
const { infoRutinas } = require('../rutinas');

router.get('/', (req, res) => {
  res.json(infoRutinas);
});

module.exports = router;
