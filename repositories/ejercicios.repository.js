const Ejercicio = require('../models/ejercicios.model');

// Obtener todos
exports.getAllEjerciciosRepository = async () => {
  return await Ejercicio.find();
};

// Obtener uno por ID
exports.getEjercicioByIdRepository = async (id) => {
  return await Ejercicio.findById(id);
};

// Crear
exports.createEjercicioRepository = async (data) => {
  const nuevo = new Ejercicio(data);
  return await nuevo.save();
};

// Actualizar
exports.updateEjercicioRepository = async (id, data) => {
  return await Ejercicio.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar
exports.deleteEjercicioRepository = async (id) => {
  return await Ejercicio.findByIdAndDelete(id);
};
