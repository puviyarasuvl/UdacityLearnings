import express from 'express';
import booksRouter from './api/books';
import userRouter from './api/users';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send(
        'Server is up. API is ready for use. Please access the correct endpoint.'
    );
});

routes.use('/books', booksRouter);

routes.use('/users', userRouter);

export default routes;
