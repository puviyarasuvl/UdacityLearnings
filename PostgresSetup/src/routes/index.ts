import express from 'express';
import booksRouter from './api/books';
import dashboardRouter from './api/dashboard';
import ordersRouter from './api/orders';
import userRouter from './api/users';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send(
        'Server is up. API is ready for use. Please access the correct endpoint.'
    );
});

routes.use('/books', booksRouter);

routes.use('/users', userRouter);

routes.use('/orders', ordersRouter);

routes.use('/dashboard', dashboardRouter);

export default routes;
