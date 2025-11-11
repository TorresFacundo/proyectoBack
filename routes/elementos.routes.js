const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/elementosController');

// CRUD básico
router.post('/', equipmentController.createEquipment);
router.get('/', equipmentController.getAllEquipment);
router.get('/:id', equipmentController.getEquipmentById);
router.put('/:id', equipmentController.updateEquipment);
router.delete('/:id', equipmentController.deleteEquipment);

// Filtros especiales
router.get('/category/:category', equipmentController.getByCategory);

module.exports = router;
