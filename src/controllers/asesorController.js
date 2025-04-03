import Asesor from "../models/Asesor.js";

const getAsesorProfile = async (req, res) => {
  try {
    const asesor = await Asesor.findById(req.asesorId).select("-password");
    if (!asesor) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ id: asesor._id, username: asesor.username });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los datos del usuario" });
  }
};

export { getAsesorProfile };
