import express from "express";
import { login, logout, register } from "../controllers/authSellerController.js";
import authSellerMiddleware from "../middlewares/authSellerMiddleware.js";

const router = express.Router();

// Rutas de autenticación
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

router.get("/check-auth", authSellerMiddleware, (req, res) => {
  res.status(200).json({ auth: true, message: "Autenticado", userId: req.userId });
});

export default router;
