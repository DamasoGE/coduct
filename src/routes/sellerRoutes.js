import express from "express";
import { addSeller, getSellerProfile } from "../controllers/sellerController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import Seller from "../models/Seller.js";

const router = express.Router();

// Ruta para añadir usuarios (protegida por autenticación)
router.post("/", addSeller);

// ✅ Nueva ruta para obtener información del usuario autenticado
router.get("/me", authMiddleware, getSellerProfile);

export default router;
