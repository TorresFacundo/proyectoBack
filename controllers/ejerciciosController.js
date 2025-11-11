const { infoEjercicios } = require('../src/ejercicios');

exports.readEjercicios = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(infoEjercicios));
};

exports.createEjercicios = (req, res) => {
  let ejercicioNuevo = req.body;
  infoEjercicios.ejercicios.push(ejercicioNuevo);
  res.send(JSON.stringify(infoEjercicios));
};

exports.deleteEjercicios = (req, res) =>{
  const id = req.params.id;

  const indice = infoEjercicios.ejercicios.findIndex(ejercicios => ejercicios.id == id);

  if(indice > 0){ 
    infoEjercicios.ejercicios.splice(indice, 1);
  } else {
    res.sendStatus(404);
    res.send("Recurso no encontrado")
  }

  res.send(JSON.stringify(infoEjercicios));
};

exports.updateEjercicios = (req, res) =>{
  const ejercicioActualizado = req.body;
  const id = req.params.id;

  const indice = infoEjercicios.ejercicios.findIndex(ejercicios => ejercicios.id == id);

  if(indice > 0){ 
    infoEjercicios.ejercicios[indice] = ejercicioActualizado;
  } else {
    res.sendStatus(404);
    res.send("Recurso no encontrado")
  }

  res.send(JSON.stringify(infoEjercicios));
};