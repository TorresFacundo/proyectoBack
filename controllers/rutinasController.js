const service = require('../services/rutinasService');

// Obtener todas las rutinas
exports.getRutinas = async (req, res) => {
  try {
    const rutinas = await service.listarRutinas();
    res.json(rutinas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener rutinas', error });
  }
};

exports.getRutinaById = async (req, res) => {
  try {
    const rutina = await service.obtenerRutinaPorId(req.params.id);
    if (!rutina) {
      return res.status(404).json({ mensaje: 'Rutina no encontrada' });
    }
    res.json(rutina);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la rutina' });
  }
};


// Crear nueva rutina
exports.postRutina = async (req, res) => {
  try {
    const nueva = await service.crearRutina(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear rutina', error });
  }
};

// Actualizar rutina
exports.putRutina = async (req, res) => {
  try {
    const actualizada = await service.actualizarRutina(req.params.id, req.body);
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar rutina', error });
  }
};

// Eliminar rutina
exports.deleteRutina = async (req, res) => {
  try {
    await service.eliminarRutina(req.params.id);
    res.json({ mensaje: 'Rutina eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar rutina', error });
  }
};
