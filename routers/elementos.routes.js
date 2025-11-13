const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/elementosController');
const { protect, authorize, optionalAuth } = require('../middlewares/auth');

// Rutas públicas
router.get('/', optionalAuth, equipmentController.getAllEquipment);
router.get('/:id', optionalAuth, equipmentController.getEquipmentById);
router.get('/category/:category', optionalAuth, equipmentController.getByCategory);

// Rutas protegidas (admin e instructor)
router.post('/', protect, authorize('admin', 'instructor'), equipmentController.createEquipment);
router.put('/:id', protect, authorize('admin', 'instructor'), equipmentController.updateEquipment);
router.delete('/:id', protect, authorize('admin'), equipmentController.deleteEquipment);

module.exports = router;

//TODOS ESTOS METODOS FUNCIONAN BIEN, ROL ADMIN Y INSTRUCTOR SE PUEDEN SETEAR EN BD O CREAR LOS MOCKS