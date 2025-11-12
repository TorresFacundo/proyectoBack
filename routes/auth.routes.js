const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect, loginRateLimit } = require('../middlewares/auth');

// Rutas públicas
router.post('/register', authController.register);      //PROBADO, FUNCIONA BIEN
router.post('/login', loginRateLimit, authController.login);    //PROBADO, FUNCIONA BIEN
router.post('/refresh-token', authController.refreshToken);     //NO LO PROBE
router.post('/forgot-password', authController.forgotPassword); //NO LO PROBE
router.post('/reset-password', authController.resetPassword);   //NO LO PROBE

// Rutas protegidas (requieren autenticación)
router.post('/logout', protect, authController.logout);     //Prescindibles, se puede manejar desde el front
router.post('/logout-all', protect, authController.logoutAll);  //Prescindible, bastante avanzado para este MVP
router.get('/me', protect, authController.getMe);   //Util
router.put('/update-profile', protect, authController.updateProfile);   //PROBADO, FUNCIONA BIEN, COINCIDE CON EL FLUJO
router.put('/change-password', protect, authController.changePassword); //SE PUEDE PRESCINDIR EN EL MVP

module.exports = router;
