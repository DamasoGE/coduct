import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  timesOffered: { type: Number, default: 0 },
  timesListed: { type: Number, default: 0 }
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
