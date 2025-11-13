const userService = require('../services/authService');

// REGISTRO
exports.register = async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await userService.registerUser(req.body);

    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      data: { user, accessToken, refreshToken }
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await userService.loginUser(req.body);

    res.json({
      success: true,
      message: 'Login exitoso',
      data: { user, accessToken, refreshToken }
    });
  } catch (error) {
    const statusCode = error.message.includes('Credenciales') ? 401 : 400;
    res.status(statusCode).json({ success: false, error: error.message });
  }
};

// PERFIL ACTUAL
exports.getMe = async (req, res) => {
  try {
    const user = await userService.getCurrentUser(req.user.id);
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ACTUALIZAR PERFIL
exports.updateProfile = async (req, res) => {
  try {
    const user = await userService.updateUserProfile(req.user.id, req.body);
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
