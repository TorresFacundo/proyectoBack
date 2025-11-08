const { createServer} = require('node:http');
const express = require("express");

const app = express();
const PORT = 3000;
const HOSTNAME = '127.0.0.1'

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente ");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});