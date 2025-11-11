const express = require('express')
const DatosEjercicios = require('../src/ejercicios');

const routerEjercicios = express.Router();

routerEjercicios.use(express.json());

const ejerciciosController = require('../controllers/ejerciciosController')

routerEjercicios.get('/', ejerciciosController.readEjercicios);

routerEjercicios.post('/', (req, res) =>{
  let ejercicioNuevo = req.body;
  DatosEjercicios.infoEjercicios.ejercicios.push(ejercicioNuevo)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(DatosEjercicios.infoEjercicios))
})

module.exports = routerEjercicios;