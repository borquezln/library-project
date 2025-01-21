import { Router } from 'express';
import { getAllBooks, createBook, updateBook, deleteBook, getOneBook, bookStats, searchBooks } from '../controllers/booksController.js';
import { authValidator } from '../middlewares/authValidator.js';

const booksRouter = Router();

booksRouter.get('/', getAllBooks);
booksRouter.get('/stats', bookStats);
booksRouter.get('/search', searchBooks);
booksRouter.get('/:isbn', getOneBook);
booksRouter.post('/', createBook);
booksRouter.put('/:isbn', updateBook);
booksRouter.delete('/:isbn', deleteBook);

export { booksRouter };