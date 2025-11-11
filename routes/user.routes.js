const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect, authorize, isOwnerOrAdmin } = require('../middlewares/auth');


// Rutas de administración (solo admin)
router.post('/', protect, authorize('admin'), userController.createUser);
router.get('/', protect, authorize('admin', 'instructor'), userController.getAllUsers);
router.delete('/:id', protect, authorize('admin'), userController.deleteUser);

// Rutas con verificación de propietario o admin
router.get('/:id', protect, isOwnerOrAdmin('id'), userController.getUserById);
router.put('/:id', protect, isOwnerOrAdmin('id'), userController.updateUser);

// Asignar rutinas (instructor o admin)
// router.post(
//   '/:userId/routines/:routineId',
//   protect,
//   authorize('instructor', 'admin'),
//   userController.assignRoutine
// );

// Registrar progreso (usuario propietario o admin)
// router.post(
//   '/:userId/routines/:routineId/progress',
//   protect,
//   isOwnerOrAdmin('userId'),
//   userController.logRoutineProgress
// );

module.exports = router;
