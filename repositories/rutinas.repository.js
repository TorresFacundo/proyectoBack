const Rutina = require('../models/rutinas.model');

// Traer todas las rutinas
exports.getAllRutinasRepository = async () => {
  console.log("Entrando en MONGO DB REPOSITORY - getAllRutinasRepository");

  try {
    const rutinas = await Rutina.find();
    console.log(rutinas);
    return rutinas;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - getAllRutinasRepository:", error);
    throw new Error("Error al obtener las rutinas: " + error);
  }
};

// Obtener rutina por ID
exports.obtenerRutinaPorIdRepository = async (id) => {
  console.log(`Entrando en MONGO DB REPOSITORY - getRutinaByIdRepository - id: ${id}`);

  try {
    const rutina = await Rutina.findById(id);
    if (!rutina) {
      console.log('Rutina no encontrada');
      return null;
    }
    return rutina;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - getRutinaByIdRepository:", error);
    throw new Error("Error al obtener la rutina: " + error);
  }
};

// Crear rutina
exports.createRutinaRepository = async (rutinaData) => {
  console.log("Entrando en MONGO DB REPOSITORY - createRutinaRepository");

  try {
    const nuevaRutina = new Rutina(rutinaData);
    await nuevaRutina.save();
    console.log("Rutina creada:", nuevaRutina);
    return nuevaRutina;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - createRutinaRepository:", error);
    throw new Error("Error al crear la rutina: " + error);
  }
};

// Actualizar rutina
exports.updateRutinaRepository = async (id, rutinaData) => {
  console.log(`Entrando en MONGO DB REPOSITORY - updateRutinaRepository - id: ${id}`);

  try {
    const rutinaActualizada = await Rutina.findByIdAndUpdate(id, rutinaData, { new: true });
    if (!rutinaActualizada) {
      console.log("Rutina no encontrada");
      return null;
    }
    console.log("Rutina actualizada:", rutinaActualizada);
    return rutinaActualizada;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - updateRutinaRepository:", error);
    throw new Error("Error al actualizar la rutina: " + error);
  }
};

// Eliminar rutina
exports.deleteRutinaRepository = async (id) => {
  console.log(`Entrando en MONGO DB REPOSITORY - deleteRutinaRepository - id: ${id}`);

  try {
    const rutinaEliminada = await Rutina.findByIdAndDelete(id);
    if (!rutinaEliminada) {
      console.log("Rutina no encontrada");
      return null;
    }
    console.log("Rutina eliminada:", rutinaEliminada);
    return rutinaEliminada;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - deleteRutinaRepository:", error);
    throw new Error("Error al eliminar la rutina: " + error);
  }
};
