const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect, loginRateLimit } = require('../middlewares/auth');

// Rutas públicas
router.post('/register', authController.register);
router.post('/login', loginRateLimit, authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

// Rutas protegidas (requieren autenticación)
router.post('/logout', protect, authController.logout);
router.post('/logout-all', protect, authController.logoutAll);
router.get('/me', protect, authController.getMe);
router.put('/update-profile', protect, authController.updateProfile);
router.put('/change-password', protect, authController.changePassword);

module.exports = router;
