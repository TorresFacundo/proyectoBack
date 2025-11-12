const express = require('express')
const DatosEjercicios = require('../src/ejercicios');

const routerEjercicios = express.Router();

routerEjercicios.use(express.json());

const ejerciciosController = require('../controllers/ejerciciosController')

routerEjercicios.get('/', ejerciciosController.readEjercicios);

routerEjercicios.get('/:id', ejerciciosController.readEjercicioId);

routerEjercicios.post('/', ejerciciosController.createEjercicios)

routerEjercicios.delete('/:id', ejerciciosController.deleteEjercicios)

routerEjercicios.put('/:id', ejerciciosController.updateEjercicios)

routerEjercicios.put('/:id/item', ejerciciosController.updateEjerciciosItems)

/*falta agregar 2 rutas */

module.exports = routerEjercicios;