import express from "express";
import { getSellerProfile } from "../controllers/sellerController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import Seller from "../models/Seller.js";

const router = express.Router();

// ✅ Nueva ruta para obtener información del usuario autenticado
router.get("/me", authMiddleware, getSellerProfile);

export default router;
