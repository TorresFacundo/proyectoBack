const Rutina = require('../models/rutinaModel');

const listarRutinas = async () => {
  return await Rutina.find();
};

const crearRutina = async (datos) => {
  const nuevaRutina = new Rutina(datos);
  return await nuevaRutina.save();
};

const eliminarRutina = async (id) => {
  return await Rutina.findByIdAndDelete(id);
};

module.exports = { listarRutinas, crearRutina, eliminarRutina };
