// Importaciones globales
import express from "express";
process.loadEnvFile();

// Importaciones propias
import { booksRouter } from "./src/routes/booksRouter.js";

// Creación de la aplicación
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// Configuraciones
import { connectDB } from "./src/config/mongo.js";

// Uso de middlewares
app.use(express.json());

// Rutas
app.use('/api/books', booksRouter);

// Launcher
app.listen(PORT, () => {
    console.log(`Server is running port http://localhost:${PORT}`);
    connectDB(MONGO_URI);
});