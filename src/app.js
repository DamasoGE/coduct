import cookieParser from "cookie-parser";
import express from "express";
import authAsesorRoutes from "./routes/authAsesorRoutes.js";
import asesorRoutes from "./routes/asesorRoutes.js";
import authSellerRoutes from "./routes/authSellerRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import { FRONTEND_URL } from "./config/config.js";


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/authasesor", authAsesorRoutes);
app.use("/api/asesor", asesorRoutes);

app.use("/api/authseller", authSellerRoutes);
app.use("/api/seller", sellerRoutes);

app.use("/api/property", propertyRoutes);

export default app;
