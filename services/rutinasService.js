const Rutina = require('../models/rutinas.model');
const repository = require('../repositories/rutinas.repository');

// Obtener todas
exports.listarRutinas = async () => {
  return await Rutina.find();
};


exports.obtenerRutinaPorId = async (id) => {
  return await repository.obtenerRutinaPorIdRepository(id);
};


// Crear
exports.crearRutina = async (data) => {
  const nueva = new Rutina(data);
  return await nueva.save();
};

// Actualizar
exports.actualizarRutina = async (id, data) => {
  return await Rutina.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar
exports.eliminarRutina = async (id) => {
  return await Rutina.findByIdAndDelete(id);
};
