import Property from "../models/Property.js";

export const createProperty = async (req, res) => {
  try {
    const { address } = req.body;
    const newProperty = new Property({ address });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la propiedad", error });
  }
};

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener propiedades", error });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: "Propiedad no encontrada" });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la propiedad", error });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProperty) return res.status(404).json({ message: "Propiedad no encontrada" });
    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la propiedad", error });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deletedProperty) return res.status(404).json({ message: "Propiedad no encontrada" });
    res.json({ message: "Propiedad eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la propiedad", error });
  }
};
