import express from "express";
import { createProperty, getProperties, getPropertyById, updateProperty, deleteProperty } from "../controllers/propertyController.js";

const router = express.Router();

router.get("/", getProperties);
router.post("/", createProperty);

router.get("/:id", getPropertyById);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export default router;