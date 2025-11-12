const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.registerUser = async ({ name, email, password, role }) => {
  // Verificar si el email ya existe
  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    throw new Error('El email ya está registrado');
  }

  // Crear usuario
  const user = await userRepository.create({
    name,
    email,
    password,
    role: 'user'
  });

  // Generar tokens
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  // Guardar refresh token en BD
  user.refreshTokens.push({ token: refreshToken });
  await userRepository.save(user);

  return { user, accessToken, refreshToken };
};

exports.loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Por favor proporciona email y contraseña');
  }

  const user = await userRepository.findByEmailWithPassword(email);
  if (!user) {
    throw new Error('Credenciales inválidas');
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error('Credenciales inválidas');
  }

  if (user.membershipStatus === 'suspended') {
    throw new Error('Tu membresía está suspendida. Contacta al administrador.');
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshTokens.push({ token: refreshToken });
  user.lastLogin = new Date();
  await userRepository.save(user);

  return { user, accessToken, refreshToken };
};

exports.getCurrentUser = async (userId) => {
  return await userRepository.findById(userId);
};

exports.updateUserProfile = async (userId, body) => {
  const allowedUpdates = ['name', 'profile', 'goals'];
  const updates = {};

  allowedUpdates.forEach(field => {
    if (body[field] !== undefined) {
      updates[field] = body[field];
    }
  });

  return await userRepository.updateById(userId, updates);
};
