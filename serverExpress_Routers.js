const express = require('express');
const app = express();
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const routerEjercicios = require('./routers/routerEjercicios')
const routerApiPrincipal = require('./routers/routerApiPrincipal')

app.use(express.json());

//Routers
app.use('/api/ejercicios', routerEjercicios);
app.use('/api', routerApiPrincipal);

// Metodos HTTP
app.get('/', (req, res) => {
  res.send('<h1>Server con express1</h1>');
});

app.get('/{*any}', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.status(404)
  res.send("La ruta a la que quiere ingresar, no existe.")
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}`);
});