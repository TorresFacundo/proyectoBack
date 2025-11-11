const express = require('express');
const router = express.Router();
const { infoRutinas } = require('../src/rutinas');

const rutinasController = require('../controllers/rutinasController');

router.get('/', rutinasController.obtenerRutinas);
router.post('/', rutinasController.crearRutina);
router.delete('/:id', rutinasController.eliminarRutina);

module.exports = router;
