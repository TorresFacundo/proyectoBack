require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connection');
const errorHandler = require('./middlewares/errorHandler');

// Importar rutas
const userRoutes = require('./routes/user.routes');
//const exerciseRoutes = require('./routes/ejercicios.routes');
const equipmentRoutes = require('./routes/elementos.routes');
//const routineRoutes = require('./routes/rutinas.routes');
//const classRoutes = require('./routes/clases.routes');

// Inicializar app
const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware (desarrollo)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({
    message: '🏋️ API del Gimnasio',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      exercises: '/api/exercises',
      equipment: '/api/equipment',
      routines: '/api/routines',
      classes: '/api/classes'
    }
  });
});

// Rutas de la API
console.log('userRoutes:', userRoutes);

app.use('/api/users', userRoutes);
//app.use('/api/exercises', exerciseRoutes);
app.use('/api/equipment', equipmentRoutes);
//app.use('/api/routines', routineRoutes);
//app.use('/api/classes', classRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Ruta ${req.originalUrl} no encontrada'
  });
});

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📡 Modo: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;