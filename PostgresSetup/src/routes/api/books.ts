import express from 'express';
import { Book, BookStore } from '../../models/book';
import authenticator from '../../utilities/authenticator';

const booksRouter = express.Router();

const store = new BookStore();

const index = async (_req: express.Request, res: express.Response) => {
    try {
        const result = await store.index();
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const show = async (req: express.Request, res: express.Response) => {
    const bookId = req.params.bookId as String;

    try {
        const result = await store.show(bookId);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const create = async (req: express.Request, res: express.Response) => {
    const newBook: Book = {
        title: req.body.title,
        total_pages: parseInt(req.body.total_pages),
        author: req.body.author,
        type: req.body.type,
        summary: req.body.summary,
    };
    try {
        const result = await store.create(newBook);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const deleteOne = async (req: express.Request, res: express.Response) => {
    try {
        await store.delete(req.body.bookId);
        res.send('Deleted Successfully');
    } catch (err) {
        res.status(400);
        res.send(err);
    }
};

booksRouter.get('/', (req, res) => {
    index(req, res);
});

booksRouter.get('/:bookId', (req, res) => {
    show(req, res);
});

booksRouter.post('/', authenticator, (req, res) => {
    create(req, res);
});

booksRouter.delete('/', authenticator, (req, res) => {
    deleteOne(req, res);
});

export default booksRouter;
