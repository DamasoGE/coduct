import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ auth: false, message: "Acceso denegado, no autenticado" });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.sellerId = verified.sellerId;
    next();
  } catch (err) {
    res.status(403).json({ auth:false, message: "Token inválido o expirado" });
  }
};

export default authMiddleware;
