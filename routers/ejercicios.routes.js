const express = require('express');
const router = express.Router();
const controller = require('../controllers/ejerciciosController');

// Rutas para manejar los CRUD de Ejercicios
router.get('/', controller.readEjercicios);
router.get('/:id', controller.readEjercicioId);
router.post('/', controller.createEjercicios);
router.put('/:id', controller.updateEjercicios);
router.put('/:id', controller.updateEjerciciosItems);
router.delete('/:id', controller.deleteEjercicios);

module.exports = router;
