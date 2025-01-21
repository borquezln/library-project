import jwt from 'jsonwebtoken';
process.loadEnvFile();

const JWT_SECRET = process.env.JWT_SECRET;
const authValidator = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token inexistente' });
        }
        
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido', error: error.message });
    }
}

export { authValidator };