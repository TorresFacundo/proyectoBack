// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
  try {
    const uri = `mongodb+srv://${process.env.USER_DB_MONGO_DB}:${process.env.PASSWORD_DB_MONGO_DB}@cluster0.ldkoxpy.mongodb.net/${process.env.NAME_DB_MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Conectado correctamente a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = conectarDB;

