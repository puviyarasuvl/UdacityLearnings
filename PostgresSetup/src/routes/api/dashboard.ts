import express from 'express';
import { Dashboard } from '../../services/dashboard';

const dashboardRouter = express.Router();

const dashboard = new Dashboard();

const booksInOrder = async (req: express.Request, res: express.Response) => {
    try {
        const result = await dashboard.productInOrders(req.body.orderId);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Failed. ${err}`);
    }
};

dashboardRouter.get('/books-in-order', (req, res) => {
    booksInOrder(req, res);
});

export default dashboardRouter;
