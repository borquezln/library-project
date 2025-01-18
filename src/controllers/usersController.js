import { User } from '../models/usersModel.js';
import { userSchemaZod } from '../validators/usersValidator.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const validateUser = userSchemaZod.parse({ firstName, lastName, email, password });
        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = new User({
            firstName: validateUser.firstName,
            lastName: validateUser.lastName,
            email: validateUser.email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch(error) {
        if (error.name === 'ZodError') {
            res.status(400).json({
                name: 'Error en la validación de datos',
                message: error.errors }
            );
        }
        else if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(409).json({ name: error.name, message: "El correo electrónico ya está registrado" });
        } else {
            res.status(500).json({ name: error.name, message: error.message });
        }
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'El email y la contraseña son obligatorios' });
        }

        const validateUser = userSchemaZod.partial().parse({ email, password });
        const user = await User.findOne({ email: validateUser.email });
        if (user) {
            const isValidPassword = await bcryptjs.compare(validateUser.password, user.password);
            if (isValidPassword) {
                const payload = { id: user._id, email: user.email, name: user.firstName };
                const JWT_SECRET = process.env.JWT_SECRET;
                const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

                return res.status(200).json({ user, token });
            }
        }

        return res.status(401).json({ message: 'Credenciales incorrectas' });
    } catch(error) {
        res.status(500).json({ name: error.name, message: error.message });
    }
}

export { createUser, loginUser };