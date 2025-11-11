import mongoose from "mongoose";

const rutinaSchema = new mongoose.Schema({
  nombre: String,
  objetivo: String,
  tipo: Number
});

export default mongoose.model("Rutina", rutinaSchema);
