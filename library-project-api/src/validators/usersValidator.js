import { z } from 'zod';

const userSchemaZod = z.object({
    firstName: z.string({ message: 'El nombre debe ser un string'}).nonempty({ message: 'El nombre es obligatorio'}).trim(),
    lastName: z.string({ message: 'El apellido debe ser un string'}).nonempty({ message: 'El apellido es obligatorio'}).trim(),
    email: z.string({ message: 'El email debe ser un string'}).nonempty({ message: 'El email es obligatorio'}).email({ message: 'El email no es válido'}).trim(),
    password: z.string({ message: 'La contraseña debe ser un string'}).nonempty({ message: 'La contraseña es obligatoria'}).min(8, { message: 'La contraseña es demasiado corta'}).trim(),
});

export { userSchemaZod };