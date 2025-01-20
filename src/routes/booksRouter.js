import { Router } from 'express';
import { getAllBooks, createBook, updateBook, deleteBook, getOneBook, bookStats, searchBooks } from '../controllers/booksController.js';
import { authValidator } from '../middlewares/authValidator.js';

const booksRouter = Router();

booksRouter.get('/', authValidator, getAllBooks);
booksRouter.get('/stats', authValidator, bookStats);
booksRouter.get('/search', authValidator, searchBooks);
booksRouter.get('/:isbn', authValidator, getOneBook);
booksRouter.post('/', authValidator, createBook);
booksRouter.put('/:isbn', authValidator, updateBook);
booksRouter.delete('/:isbn', authValidator, deleteBook);

export { booksRouter };