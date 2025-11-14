const claseService = require('../services/clasesService');

// Obtener todas las clases
exports.getClases = async (req, res) => {
  try {
    const clases = await claseService.listarClases();
    res.json(clases);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clases', error: error.message });
  }
};

exports.getClaseById = async (req, res) => {
  try {
    const clase = await claseService.obtenerClasePorId(req.params.id);
    if (!clase) {
      return res.status(404).json({ mensaje: 'no encontrada' });
    }
    res.json(clase);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error', error: error.message });
  }
};


// Crear nueva clase
exports.postClase = async (req, res) => {
  try {
    const nueva = await claseService.crearClase(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear clase', error: error.message });
  }
};

// Actualizar clase
exports.putClase = async (req, res) => {
  try {
    const actualizada = await claseService.actualizarClase(req.params.id, req.body);
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar', error: error.message });
  }
};

// Eliminar clase
exports.deleteClase = async (req, res) => {
  try {
    await claseService.eliminarClase(req.params.id);
    res.json({ mensaje: 'eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar clase', error: error.message });
  }
};
