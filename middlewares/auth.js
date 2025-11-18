const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// ============================================
// PROTEGER RUTAS (Verificar JWT)
// ============================================
exports.protect = async (req, res, next) => {
  try {
    let token;

    // Obtener token del header Authorization
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Verificar si el token existe
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'No autorizado. Token no proporcionado.'
      });
    }

    // Verificar token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({
          success: false,
          error: 'Token expirado',
          code: 'TOKEN_EXPIRED'
        });
      }
      return res.status(401).json({
        success: false,
        error: 'Token inválido'
      });
    }

    // Buscar usuario
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Usuario no encontrado'
      });
    }

    // Adjuntar usuario al request
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error de autenticación'
    });
  }
};

// ============================================
// AUTORIZAR ROLES
// ============================================
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: `El rol '${req.user.role}' no tiene permiso para acceder a este recurso`
      });
    }
    next();
  };
};

// ============================================
// VERIFICAR PROPIETARIO O ADMIN
// ============================================
exports.isOwnerOrAdmin = (resourceIdParam = 'id') => {
  return (req, res, next) => {
    const resourceId = req.params[resourceIdParam];
    
    // Si es admin, puede acceder
    if (req.user.role === 'admin') {
      return next();
    }

    // Si es el propietario, puede acceder
    if (req.user.id === resourceId || req.user._id.toString() === resourceId) {
      return next();
    }

    return res.status(403).json({
      success: false,
      error: 'No tienes permiso para acceder a este recurso'
    });
  };
};

// ============================================
// MIDDLEWARE OPCIONAL (No requiere auth)
// ============================================
exports.optionalAuth = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (user) {
          req.user = user;
        }
      } catch (error) {
        // Token inválido o expirado, continuar sin usuario
      }
    }

    next();
  } catch (error) {
    next();
  }
};


// ============================================
// RATE LIMITING SIMPLE
// ============================================
const loginAttempts = new Map();

exports.loginRateLimit = (req, res, next) => {
  const email = req.body.email;
  
  if (!email) {
    return next();
  }

  const now = Date.now();
  const attempts = loginAttempts.get(email) || { count: 0, resetTime: now };

  // Resetear después de 15 minutos
  if (now > attempts.resetTime) {
    attempts.count = 0;
    attempts.resetTime = now + 15 * 60 * 1000;
  }

  attempts.count++;
  loginAttempts.set(email, attempts);

  // Máximo 5 intentos en 15 minutos
  if (attempts.count > 5) {
    return res.status(429).json({
      success: false,
      error: 'Demasiados intentos de login. Intenta de nuevo en 15 minutos.'
    });
  }

  next();
};
