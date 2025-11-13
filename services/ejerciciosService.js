const repository = require('../repositories/ejercicios.repository');

// Obtener todos
exports.listarEjercicios = async () => {
  return await repository.getAllEjerciciosRepository();
};

// Obtener uno
exports.obtenerEjercicioPorId = async (id) => {
  return await repository.getEjercicioByIdRepository(id);
};

// Crear
exports.crearEjercicio = async (data) => {
  return await repository.createEjercicioRepository(data);
};

// Actualizar
exports.actualizarEjercicio = async (id, data) => {
  return await repository.updateEjercicioRepository(id, data);
};

// Eliminar
exports.eliminarEjercicio = async (id) => {
  return await repository.deleteEjercicioRepository(id);
};
