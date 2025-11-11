const express = require('express');
const fs = require('node:fs');

// importar las rutas
const ejerciciosRoutes = require('./routers/ejercicios.routes');
const rutinasRoutes = require('./routers/rutinas.routes');

const app = express();
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

// Si estás usando body JSON
app.use(express.json());

// Leer archivos HTML
const HOME = fs.readFileSync('./index.html', 'utf-8');
const ABOUT = fs.readFileSync('./about.html', 'utf-8');

// Rutas de páginas
app.get('/', (req, res) => {
  res.send(HOME);
});

app.get('/about', (req, res) => {
  res.send(ABOUT);
});

// ✅ Rutas API
app.use('/api/ejercicios', ejerciciosRoutes);
app.use('/api/rutinas', rutinasRoutes);

// Escuchar el servidor
app.listen(PORT, HOSTNAME, () => {
  console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}`);
});
