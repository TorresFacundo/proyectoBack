const ejerciciosService = require('../services/ejerciciosService');

// Obtener todos los ejercicios
exports.readEjercicios = async (req, res) => {
  try {
    const ejercicios = await ejerciciosService.listarEjercicios();
    res.status(200).json(ejercicios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los ejercicios', error });
  }
};

// Obtener ejercicio por ID
exports.readEjercicioId = async (req, res) => {
  try {
    const ejercicio = await ejerciciosService.obtenerEjercicioPorId(req.params.id);
    if (!ejercicio) {
      return res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
    res.status(200).json(ejercicio);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el ejercicio', error });
  }
};

// Crear nuevo ejercicio
exports.createEjercicios = async (req, res) => {
  try {
    const nuevoEjercicio = await ejerciciosService.crearEjercicio(req.body);
    res.status(201).json(nuevoEjercicio);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el ejercicio', error });
  }
};

// Actualizar ejercicio
exports.updateEjercicios = async (req, res) => {
  try {
    const actualizado = await ejerciciosService.actualizarEjercicio(req.params.id, req.body);
    if (!actualizado) {
      return res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el ejercicio', error });
  }
};

// solo un campo específico o items internos
exports.updateEjerciciosItems = async (req, res) => {
  try {
    const actualizado = await ejerciciosService.actualizarEjercicio(req.params.id, req.body);
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar items del ejercicio', error });
  }
};

// Eliminar ejercicio
exports.deleteEjercicios = async (req, res) => {
  try {
    const eliminado = await ejerciciosService.eliminarEjercicio(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Ejercicio no encontrado' });
    }
    res.status(200).json({ message: 'Ejercicio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el ejercicio', error });
  }
};
