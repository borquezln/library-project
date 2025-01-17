import { Book } from '../models/booksModel.js';
import { bookSchemaZod } from '../validators/booksValidator.js';

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch(error) {
        res.status(500).json({ message: 'Error encontrando los libros' });
    }
}

const getOneBook = async (req, res) => {
    try {
        const { isbn } = req.params;
        const book = await Book.findOne({ isbn: isbn });
        if (!book) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(book);
    } catch(error) {
        res.status(500).json({ name: error.name, message: error.message });
    }
}

const createBook = async (req, res) => {
    try {
        const validateBook = bookSchemaZod.parse(req.body);
        
        const newBook = new Book(validateBook);
        const savedBook = await newBook.save();

        res.status(201).json(savedBook);
    } catch(error) {
        if (error.name === 'ZodError') {
            res.status(400).json({
                name: 'Error en la validación de datos',
                message: error.errors[0].message }
            );
        }
        else if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(409).json({ name: error.name, message: error.message });
        } else {
            res.status(500).json({ name: error.name, message: error.message });
        }
    }
}

const updateBook = async (req, res) => {
    try {
        const { isbn } = req.params;
        const validateBook = bookSchemaZod.partial().parse(req.body);
        const updatedBook = await Book.findOneAndUpdate({ isbn: isbn }, validateBook, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(updatedBook);
    } catch(error) {
        if (error.name === 'ZodError') {
            res.status(400).json({
                name: 'Error en la validación de datos',
                message: error.errors[0].message }
            );
        }
        else if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(409).json({ name: error.name, message: error.message });
        } else {
            res.status(500).json({ name: error.name, message: error.message });
        }
    }
}

const deleteBook = async (req, res) => {
    try {
        const { isbn } = req.params;
        const deletedBook = await Book.findOneAndDelete({ isbn: isbn });
        if (!deletedBook) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(deletedBook);
    } catch(error) {
        res.status(500).json({ name: error.name, message: error.message });
    }
}

export { getAllBooks, createBook, updateBook, deleteBook, getOneBook };