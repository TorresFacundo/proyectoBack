const mongoose = require("mongoose");

const rutinaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  objetivo: { type: String, required: true },
  tipo: { type: String, required: true } //
});


module.exports = mongoose.model("Rutina", rutinaSchema);

