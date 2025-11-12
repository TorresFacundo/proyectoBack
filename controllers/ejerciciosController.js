const { infoEjercicios } = require('../src/ejercicios');
const ejerciciosService = require('../service/ejerciciosService')

exports.readEjercicios = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(ejerciciosService.getAllEjercicios());
};

exports.createEjercicios = (req, res) => {
  res.send(ejerciciosService.createNewEjercicio(req.body));
};

exports.deleteEjercicios = (req, res) =>{
  const id = req.params.id;
  const ejerciciosController = ejerciciosService.deleteEjercicio(id)

  if(ejerciciosController.length === 0){ 
    return res.sendStatus(404).res.send("Ejercicio de id: " + id + " no encontrado")
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(ejerciciosController);
};

/*FALTA POR ITEMS */

exports.updateEjercicios = (req, res) =>{
  const ejercicioActualizado = req.body;
  const id = req.params.id;

  const ejercicioController = ejerciciosService.updateEjercicio(id, ejercicioActualizado)

  if(ejercicioController === 0){
    return res.status(404).send("Ejercicio de id: " + id + " no encontrado")
  }
  
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(ejercicioController);
};

/*FALTA POR ITEMS */