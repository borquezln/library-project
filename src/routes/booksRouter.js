import { Router } from 'express';
import { getAllBooks, createBook, updateBook, deleteBook, getOneBook } from '../controllers/booksController.js';

const booksRouter = Router();

booksRouter.get('/', getAllBooks);
booksRouter.get('/:isbn', getOneBook);
booksRouter.post('/', createBook);
booksRouter.put('/:isbn', updateBook);
booksRouter.delete('/:isbn', deleteBook);

export { booksRouter };