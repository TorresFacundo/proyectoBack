const repository = require('../repositories/clases.repository');

// Obtener todas
exports.listarClases = async () => {
  return await repository.getAllClasesRepository();
};

// Obtener una
exports.obtenerClasePorId = async (id) => {
  return await repository.getClaseByIdRepository(id);
};

// Crear
exports.crearClase = async (data) => {
  return await repository.createClaseRepository(data);
};

// Actualizar
exports.actualizarClase = async (id, data) => {
  return await repository.updateClaseRepository(id, data);
};

// Eliminar
exports.eliminarClase = async (id) => {
  return await repository.deleteClaseRepository(id);
};
