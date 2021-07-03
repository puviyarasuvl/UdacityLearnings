import express from 'express';
import booksRouter from './api/books';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send(
        'Server is up. API is ready for use. Please access the correct endpoint.'
    );
});

routes.use('/books', booksRouter);

export default routes;
