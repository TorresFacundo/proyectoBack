const Rutina = require('../models/rutinas.model');
const repository = require('../repositories/rutinas.repository');

// Obtener todas
exports.listarRutinas = async () => {
  return await repository.getAllRutinasRepository();
};

// Obtener una
exports.obtenerRutinaPorId = async (id) => {
  return await repository.obtenerRutinaPorIdRepository(id);
};

// Crear
exports.crearRutina = async (data) => {
  return await repository.createRutinaRepository(data);
};

// Actualizar
exports.actualizarRutina = async (id, data) => {
  return await repository.updateRutinaRepository(id, data);
};

// Eliminar
exports.eliminarRutina = async (id) => {
  return await repository.deleteRutinaRepository(id);
};
