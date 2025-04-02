import app from "./src/app.js"; // Asegúrate de incluir la extensión .js
import { PORT } from "./src/config/config.js";
import connectDB from "./src/config/db.js";


const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
};

startServer();
