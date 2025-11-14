const express = require('express');
const router = express.Router();
const controller = require('../controllers/clasesController');

// Rutas para manejar los CRUD de Ejercicios
router.get('/', controller.getClases);
router.get('/:id', controller.getClaseById);
router.post('/', controller.postClase);
router.delete('/:id', controller.deleteClase);

module.exports = router;
