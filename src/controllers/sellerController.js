import Seller from "../models/Seller.js";

const addSeller = async (req, res) => {
  const { username, password } = req.body;

  // Crear y guardar el nuevo usuario
  const seller = new Seller({ username, password });
  await seller.save();

  res.status(201).json({ message: "Usuario añadido" });
};

const getSellerProfile = async (req, res) => {
  try {
    const seller = await Seller.findById(req.sellerId).select("-password");
    if (!seller) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ id: seller._id, username: seller.username });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los datos del usuario" });
  }
};

export { addSeller, getSellerProfile };
