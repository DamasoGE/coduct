import jwt from "jsonwebtoken";
import Asesor from "../models/Asesor.js";
import { JWT_SECRET, NODE_ENV } from "../config/config.js";



const login = async (req, res) => {
  const { username, password } = req.body;

  const asesor = await Asesor.findOne({ username });
  if (!asesor || !(await asesor.comparePassword(password))) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign({ asesorId: asesor._id }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000, 
    sameSite: "strict", 
  });

  res.json({ auth: true, message: "Inicio de sesión exitoso" });
};


const register = async (req, res) => {
  const { username, password } = req.body;

  const existingasesor = await Asesor.findOne({ username });
  if (existingasesor) {
    return res.status(400).json({ message: "El usuario ya existe" });
  }

  const asesor = new Asesor({ username, password });
  await asesor.save();

  res.status(201).json({ message: "Usuario registrado" });
};

const logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: NODE_ENV === "production",
    maxAge: 0,
  });
  res.json({ auth: false, message: "Sesión cerrada exitosamente" });
};

export { login, logout, register };