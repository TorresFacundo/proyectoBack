const mongoose = require('mongoose');
const configMongoDB = require ('./config').configMongoDB

const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/gimnasioDB');
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

const URI = `mongodb+srv://francoespejo743_db_user:ulE7Eqgwzdb95dno@cluster0.ldkoxpy.mongodb.net/?appName=Cluster0`

exports.getMongoDBConnection = async () => {
  try {
    await mongoose.conect('mongodb://127.0.0.1/gimnasioDB')
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = conectarDB;
