import mongoose from "mongoose";
import connectDB from "./db.js";
import Seller from "../models/Seller.js";

const scriptDB = async () => {
  await connectDB();
  try {
    const existingSeller = await Seller.findOne({ username: "root" });
    if (existingSeller) {
      console.log("El usuario 'root' ya existe.");
      return;
    }
    
    const newSeller = new Seller({ username: "root", password: "root" });
    await newSeller.save();
    console.log("Seller insertado correctamente");
  } catch (error) {
    console.error("Error insertando seller:", error);
  } finally {
    mongoose.connection.close();
  }
};

scriptDB();
