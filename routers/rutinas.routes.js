const express = require('express');
const router = express.Router();
const { infoRutinas } = require('../rutinas');

router.get('/', rutinasController.obtenerRutinas);
router.post('/', rutinasController.crearRutina);
router.delete('/:id', rutinasController.eliminarRutina);

module.exports = router;
