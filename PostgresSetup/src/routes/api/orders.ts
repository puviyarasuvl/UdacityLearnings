import express from 'express';
import { Order, OrderBook, OrdersHandler } from '../../models/order';

const ordersRouter = express.Router();

const handler = new OrdersHandler();

const index = async (_req: express.Request, res: express.Response) => {
    try {
        const result = await handler.index();
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(err);
    }
};

const show = async (req: express.Request, res: express.Response) => {
    try {
        const result = await handler.show(req.params.id);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(err);
    }
};

const create = async (req: express.Request, res: express.Response) => {
    try {
        const newOrder: Order = {
            active: true,
            userId: req.body.userId,
        };
        const result = await handler.create(newOrder);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send;
    }
};

const update = async (req: express.Request, res: express.Response) => {
    try {
        const result = await handler.update(req.params.id);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(err);
    }
};

const addBook = async (req: express.Request, res: express.Response) => {
    try {
        const result = await handler.addBook(
            req.body.quantity,
            req.params.id,
            req.body.bookId
        );
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Failed ${err}`);
    }
};

ordersRouter.get('/', (req, res) => {
    index(req, res);
});

ordersRouter.get('/:id', (req, res) => {
    show(req, res);
});

ordersRouter.post('/', (req, res) => {
    create(req, res);
});

ordersRouter.patch('/:id', (req, res) => {
    update(req, res);
});

ordersRouter.post('/:id/book', (req, res) => {
    addBook(req, res);
});

export default ordersRouter;
