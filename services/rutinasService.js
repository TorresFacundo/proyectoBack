const { infoRutinas } = require('../src/rutinas');

// Listar todas las rutinas
const listarRutinas = async () => {
  return infoRutinas;
};

// Crear una nueva rutina
const crearRutina = async (nuevaRutina) => {
  const id = infoRutinas.length + 1;
  const rutina = { id, ...nuevaRutina };
  infoRutinas.push(rutina);
  return rutina;
};

// Eliminar rutina
const eliminarRutina = async (id) => {
  const index = infoRutinas.findIndex(r => r.id === parseInt(id));
  if (index !== -1) {
    infoRutinas.splice(index, 1);
  }
};

module.exports = { listarRutinas, crearRutina, eliminarRutina };
