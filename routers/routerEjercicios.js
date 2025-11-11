const express = require('express')
const DatosEjercicios = require('../src/ejercicios');

const routerEjercicios = express.Router();

routerEjercicios.use(express.json());

const ejerciciosController = require('../controllers/ejerciciosController')

routerEjercicios.get('/', ejerciciosController.readEjercicios);

routerEjercicios.post('/', ejerciciosController.createEjercicios)

routerEjercicios.delete('/:id', ejerciciosController.deleteEjercicios)

routerEjercicios.put('/:id', ejerciciosController.updateEjercicios)

module.exports = routerEjercicios;