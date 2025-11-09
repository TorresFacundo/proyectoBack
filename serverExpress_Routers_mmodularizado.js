const express = require('express');
const app = express();
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const fs = require('node:fs');
const { infoEjercicios } = require('./src/ejercicios');


const HOME = fs.readFileSync('./index.html', 'utf-8');
const ABOUT = fs.readFileSync('./about.html', 'utf-8');

const routerEjercicios = express.Router();
app.use('/api/ejercicios', routerEjercicios)


// Rutas
app.get('/', (req, res) => {
  res.send(HOME);
});

app.get('/about', (req, res) => {
  res.send(ABOUT);
});

routerEjercicios.get('/', (req, res) => {
  res.send(JSON.stringify(infoEjercicios)); // Express convierte el objeto a JSON automáticamente
});

app.get('/api/rutinas', (req, res) => {
  res.send(JSON.stringify(infoEjercicios)); // Express convierte el objeto a JSON automáticamente
});


// Escuchar el servidor
app.listen(PORT, HOSTNAME, () => {
  console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}`);
});