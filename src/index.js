// HL Configs
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'node:path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT ?? 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Internal Configs
import rateLimitConfig from './config/rateLimit.js';

// Routers
import healthRouter from './routes/healthCheck.js';
app.use('/healthcheck', healthRouter);
import registerRouter from './routes/register.js';
app.use('/register', registerRouter);

// Views Configs
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static Configs
app.use(express.static(path.resolve(__dirname, 'public')));

// Enviroments Configs
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
    console.log('Development mode. Morgan running');
}
if(process.env.NODE_ENV === 'production'){
    app.use(helmet());
    app.use(rateLimitConfig)
    console.log('Production mode. Helmet and rateLimit running');
}

// Launcher
const launcher = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server up at http://localhost:${PORT}`);
        })
    } catch (err) {
        console.log(`Server failed with error ${err}`);
    }
}
launcher();
