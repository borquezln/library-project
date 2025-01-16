import { Book } from '../models/booksModel.js';

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch(error) {
        console.error('Error getting books', error);
        res.status(500).json({ message: 'Error getting books' });
    }
}

export { getAllBooks };