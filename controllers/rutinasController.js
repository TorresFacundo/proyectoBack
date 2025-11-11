const rutinasService = require('../services/rutinasService');

// Obtener todas las rutinas
const obtenerRutinas = async (req, res) => {
  try {
    const rutinas = await rutinasService.listarRutinas();
    res.json(rutinas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener rutinas' });
  }
};

// Crear una rutina nueva
const crearRutina = async (req, res) => {
  try {
    const nuevaRutina = await rutinasService.crearRutina(req.body);
    res.status(201).json(nuevaRutina);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear rutina' });
  }
};

// Eliminar rutina por ID
const eliminarRutina = async (req, res) => {
  try {
    const { id } = req.params;
    await rutinasService.eliminarRutina(id);
    res.json({ mensaje: 'Rutina eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar rutina' });
  }
};

module.exports = { obtenerRutinas, crearRutina, eliminarRutina };
