import express from "express";
import { getAsesorProfile } from "../controllers/AsesorController.js";
import authAsesorMiddleware from "../middlewares/authAsesorMiddleware.js";
import Asesor from "../models/Seller.js";

const router = express.Router();

// ✅ Nueva ruta para obtener información del usuario autenticado
router.get("/me", authAsesorMiddleware, getAsesorProfile);

export default router;
