const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/gimnasioDB');
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

module.exports = conectarDB;
