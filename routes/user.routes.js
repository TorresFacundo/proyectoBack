const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD básico
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

//Endpoints especiales, sin implementar aun
//router.post('/:userId/routines/:routineId', userController.assignRoutine);
//router.post('/:userId/routines/:routineId/progress', userController.logRoutineProgress);

module.exports = router;
