const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect, authorize, isOwnerOrAdmin } = require('../middlewares/auth');


// Rutas de administración (solo admin)
router.get('/', protect, authorize('admin', 'instructor'), userController.getAllUsers);
router.delete('/:id', protect, authorize('admin'), userController.deleteUser);

// Rutas con verificación de propietario o admin
router.get('/:id', protect, isOwnerOrAdmin('id'), userController.getUserById);
router.put('/:id', protect, isOwnerOrAdmin('id'), userController.updateUser);

//Metodos que quedan fuera del MVP

// Asignar rutinas (instructor o admin) 
// Registrar progreso (usuario propietario o admin)

module.exports = router;
