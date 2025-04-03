import Seller from "../models/Seller.js";

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

export { getSellerProfile };
