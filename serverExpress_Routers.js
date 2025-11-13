require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('node:fs');
const connectDB = require('./database/connection');
const errorHandler = require('./middlewares/errorHandler');

// Importar rutas API
const authRouters = require('./routers/auth.routes');
const userRouters = require('./routers/user.routes');
const equipmentRouters = require('./routers/elementos.routes');
const routersEjercicios = require('./routers/routerEjercicios');
const rutinasRouters = require('./routers/rutinas.routes');
const clasesRouters = require('./routers/clases.routes');

const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = '127.0.0.1';

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging (solo en desarrollo)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Conectar a la base de datos
connectDB();

// Leer archivos HTML
const HOME = fs.readFileSync('./index.html', 'utf-8');
const ABOUT = fs.readFileSync('./about.html', 'utf-8');

// Rutas de páginas
app.get('/', (req, res) => res.send(HOME));
app.get('/about', (req, res) => res.send(ABOUT));

// Rutas de la API
app.use('/api/auth', authRouters);
app.use('/api/users', userRouters);
app.use('/api/equipment', equipmentRouters);
app.use('/api/ejercicios', routersEjercicios);
app.use('/api/rutinas', rutinasRouters);
app.use('/api/clases', clasesRouters);

// Ruta de bienvenida con información
app.get('/api', (req, res) => {
  res.json({
    message: '🏋️ API del Gimnasio',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      exercises: '/api/ejercicios',
      equipment: '/api/equipment',
      routines: '/api/rutinas',
      classes: '/api/clases'
    }
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ success: false, error: `Ruta ${req.originalUrl} no encontrada` });
});

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, HOSTNAME, () => {
  console.log(`🚀 Servidor corriendo en http://${HOSTNAME}:${PORT}`);
  console.log(`📡 Modo: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
