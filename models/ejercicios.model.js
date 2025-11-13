const mongoose = require("mongoose");

const ejerciciosSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  musculo: { type: String, required: true },
});


module.exports = mongoose.model("ejercicios", ejerciciosSchema);
