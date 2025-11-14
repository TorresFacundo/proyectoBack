const Clase = require('../models/clase.model');

// Obtener todos
exports.getAllClasesRepository = async () => {
  return await Clase.find();
};

// Obtener uno por ID
exports.getClaseByIdRepository = async (id) => {
  return await Clase.findById(id);
};

// Crear
exports.createClaseRepository = async (data) => {
  const nuevo = new Clase(data);
  return await nuevo.save();
};

// Actualizar
exports.updateClaseRepository = async (id, data) => {
  return await Clase.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar
exports.deleteClaseRepository = async (id) => {
  return await Clase.findByIdAndDelete(id);
};
