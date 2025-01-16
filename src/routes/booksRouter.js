import { Router } from 'express';
import { getAllBooks } from '../controllers/booksController.js';

const booksRouter = Router();

booksRouter.get('/', getAllBooks);

export { booksRouter };