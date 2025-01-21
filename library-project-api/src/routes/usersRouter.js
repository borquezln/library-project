import { Router } from 'express';
import { createUser, loginUser } from '../controllers/usersController.js';

const usersRouter = Router();

usersRouter.post('/register', createUser);
usersRouter.post('/login', loginUser);
// usersRouter.post('/logout', logoutUser);

export { usersRouter };