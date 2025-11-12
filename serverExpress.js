const express = require('express');
const fs = require('node:fs');
const conectarDB = require('./database/connection');

// importo las rutas
const ejerciciosRoutes = require('./routers/ejercicios.routes');
const rutinasRoutes = require('./routers/rutinas.routes');
const clasesRoutes = require('./routers/clases.routes');

const app = express();
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

app.use(express.json());

// Leer archivos HTML
const HOME = fs.readFileSync('./index.html', 'utf-8');
const ABOUT = fs.readFileSync('./about.html', 'utf-8');

// Conectar a la base de datos
conectarDB();

// Rutas de páginas
app.get('/', (req, res) => {
  res.send(HOME);
});

app.get('/about', (req, res) => {
  res.send(ABOUT);
});

// Rutas API
app.use('/api/ejercicios', ejerciciosRoutes);
app.use('/api/rutinas', rutinasRoutes);
app.use('/api/clases', clasesRoutes);

// Escuchar el servidor
app.listen(PORT, HOSTNAME, () => {
  console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}`);
});
