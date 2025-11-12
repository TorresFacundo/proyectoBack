const service = require('../services/clasesService');

// Obtener todas las rutinas
exports.getClases = async (req, res) => {
  try {
    const clases = await service.listarClases();
    res.json(clases);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clases', error });
  }
};

exports.getClaseById = async (req, res) => {
  try {
    const clase = await service.obtenerClasePorId(req.params.id);
    if (!clase) {
      return res.status(404).json({ mensaje: 'no encontrada' });
    }
    res.json(clase);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la clase' });
  }
};


// Crear nueva rutina
exports.postClase = async (req, res) => {
  try {
    const nueva = await service.crearClase(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear clase', error });
  }
};

// Actualizar rutina
exports.putClase = async (req, res) => {
  try {
    const actualizada = await service.actualizarClase(req.params.id, req.body);
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar clase', error });
  }
};

// Eliminar clase
exports.deleteClase = async (req, res) => {
  try {
    await service.eliminarClase(req.params.id);
    res.json({ mensaje: 'Clase eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar clase', error });
  }
};
