import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const asesorSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Middleware de Mongoose: Encriptar la contraseña antes de guardar
asesorSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Método para comparar contraseñas
asesorSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Exportar el modelo de usuario
export default mongoose.model("Asesor", asesorSchema);
