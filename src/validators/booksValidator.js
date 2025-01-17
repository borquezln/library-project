import { z } from 'zod';

const bookSchemaZod = z.object({
    title: z.string({ message: 'El título debe ser un string'}).nonempty({ message: 'El título es obligatorio'}).trim(),
    author: z.string({ message: 'El autor debe ser un string'}).nonempty({ message: 'El autor es obligatorio'}).trim(),
    genre: z.string({ message: 'El género debe ser un string'}).trim().optional(),
    publishedDate: z.date({ message: 'La fecha de publicación debe ser una fecha'}).optional(),
    publisher: z.string({ message: 'La editorial debe ser un string'}).trim().optional(),
    isbn: z.string({ message: 'El ISBN debe ser un string'}).trim(),
    observations: z.string({ message: 'Las observaciones deben ser un string'}).trim().optional(),
    description: z.string({ message: 'La descripción debe ser un string'}).trim().optional(),
    price: z.number({ message: 'El precio debe ser un número'}).min(0, { message: 'El precio debe ser mayor o igual a 0'}),
    stock: z.number({ message: 'El stock debe ser un número'}).min(0, { message: 'El stock debe ser mayor o igual a 0'}),
});

export { bookSchemaZod };