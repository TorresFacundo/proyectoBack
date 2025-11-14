require('dotenv').config();
const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB conectado exitosamente');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = conectarDB;
console.log("Valor de MONGODB_URI:", process.env.MONGODB_URI);

