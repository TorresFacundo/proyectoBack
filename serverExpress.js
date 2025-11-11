const express = require('express');
const fs = require('node:fs');
const routerClase = require('./routers/clases.routes');
const { infoEjercicios } = require('./src/ejercicios');
const { infoRutinas } = require('./src/rutinas');

const app = express();
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

// Leer los archivos HTML con codificación
const HOME = fs.readFileSync('./index.html', 'utf-8');
const ABOUT = fs.readFileSync('./about.html', 'utf-8');

// Rutas
app.get('/', (req, res) => {
  res.send(HOME);
});

app.get('/about', (req, res) => {
  res.send(ABOUT);
});

app.get('/api/ejercicios', (req, res) => {
  res.send(JSON.stringify(infoEjercicios)); // Express convierte el objeto a JSON automáticamente
});

app.get('/api/rutinas', (req, res) => {
  res.send(JSON.stringify(infoRutinas)); // Express convierte el objeto a JSON automáticamente
});

//Clases
app.use('/api/clases', routerClase); // todas las rutas de clases empiezan con /api/clases

// Escuchar el servidor
app.listen(PORT, HOSTNAME, () => {
  console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}`);
});
