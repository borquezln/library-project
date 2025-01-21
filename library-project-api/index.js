// Importaciones globales
import express from 'express';
import cors from 'cors';
process.loadEnvFile();

// Importaciones propias
import { booksRouter } from './src/routes/booksRouter.js';
import { usersRouter } from './src/routes/usersRouter.js';

// Creación de la aplicación
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// Configuraciones
app.use(cors({ origin: 'http://localhost:5173' }));
import { connectDB } from './src/config/mongo.js';

// Uso de middlewares
app.use(express.json());

// Rutas
app.use('/api/books', booksRouter);
app.use('/api/users', usersRouter);
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Launcher
app.listen(PORT, () => {
    console.log(`Server is running port http://localhost:${PORT}`);
    connectDB(MONGO_URI);
});