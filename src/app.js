import cookieParser from "cookie-parser";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/sellerRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import { FRONTEND_URL } from "./config/config.js";


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/seller", userRoutes);
app.use("/api/property", propertyRoutes);

export default app;
