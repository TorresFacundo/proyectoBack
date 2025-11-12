const Clase = require('../models/clase.model');

// Traer todas las clases
exports.getAllClasesRepository = async () => {
  console.log("Entrando en MONGO DB REPOSITORY - getAllClasesRepository");

  try {
    const clases = await Clase.find();
    console.log(clases);
    return clases;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - getAllClasesRepository:", error);
    throw new Error("Error" + error);
  }
};

// Obtener clases por ID
exports.obtenerClasePorIdRepository = async (id) => {
  console.log(`Entrando en MONGO DB REPOSITORY - getClaseByIdRepository - id: ${id}`);

  try {
    const clase = await Clase.findById(id);
    if (!clase) {
      console.log('clase no encontrada');
      return null;
    }
    return clase;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - getClaseByIdRepository:", error);
    throw new Error("Error: " + error);
  }
};

// Crear clase
exports.createClaseRepository = async (claseData) => {
  console.log("Entrando en MONGO DB REPOSITORY - createClaseRepository");

  try {
    const nuevaClase = new Clase(claseData);
    await nuevaClase.save();
    console.log("clase creada:", nuevaClase);
    return nuevaClase;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - createClaseRepository:", error);
    throw new Error("Error al crear clase: " + error);
  }
};

// Actualizar clase
exports.updateClaseRepository = async (id, claseData) => {
  console.log(`Entrando en MONGO DB REPOSITORY - updateClaseRepository - id: ${id}`);

  try {
    const claseActualizada = await Clase.findByIdAndUpdate(id, claseData, { new: true });
    if (!claseActualizada) {
      console.log("clase no encontrada");
      return null;
    }
    console.log("clase actualizada:", claseActualizada);
    return claseActualizada;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - updateclaseRepository:", error);
    throw new Error("Error al actualizar la clase: " + error);
  }
};

// Eliminar clase
exports.deleteClaseRepository = async (id) => {
  console.log(`Entrando en MONGO DB REPOSITORY - deleteClaseaRepository - id: ${id}`);

  try {
    const claseEliminada = await Clase.findByIdAndDelete(id);
    if (!claseEliminada) {
      console.log("no encontrada");
      return null;
    }
    console.log("Clase eliminada:", claseEliminada);
    return claseEliminada;
  } catch (error) {
    console.log("Error en MONGO DB REPOSITORY - deleteClaseRepository:", error);
    throw new Error("Error al eliminar la clase: " + error);
  }
};
