const mongoose = require("mongoose");

const claseSchema = new mongoose.Schema({
  Actividad: {
    type: String,
    required: true
  },
  profesor: {
    type: String,
    required: true
  },
  dia: {
    type: [String], // porque es un array de días: ["lunes", "miércoles", "viernes",..]
    required: true
  },
  Horario: {
    type: String, // "9:00"
    required: true
  }
});

module.exports = mongoose.model("Clase", claseSchema);
