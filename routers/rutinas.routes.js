const express = require('express');
const router = express.Router();
const controller = require('../controllers/rutinasController');

// rutas para manejar los CRUD de Rutinas
router.get('/', controller.getRutinas);
router.get('/:id', controller.getRutinaById);
router.post('/', controller.postRutina);
router.put('/:id', controller.putRutina);
router.delete('/:id', controller.deleteRutina);

module.exports = router;
