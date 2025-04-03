import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

const authAsesorMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ auth: false, message: "Acceso denegado, no autenticado" });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.asesorId = verified.asesorId;
    next();
  } catch (err) {
    res.status(403).json({ auth:false, message: "Token inválido o expirado" });
  }
};

export default authAsesorMiddleware;