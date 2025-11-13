const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect, loginRateLimit } = require('../middlewares/auth');

// Rutas públicas
router.post('/register', authController.register);      //PROBADO, FUNCIONA BIEN
router.post('/login', loginRateLimit, authController.login);    //PROBADO, FUNCIONA BIEN

// Rutas protegidas (requieren autenticación)
router.get('/me', protect, authController.getMe);   //Util
router.put('/update-profile', protect, authController.updateProfile);   //PROBADO, FUNCIONA BIEN, COINCIDE CON EL FLUJO

module.exports = router;
