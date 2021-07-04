import express from 'express';
import { User, UserHandle } from '../../models/user';

const userRouter = express.Router();

const userHandle = new UserHandle();

const create = async (req: express.Request, res: express.Response) => {
    const newUser: User = {
        user_id: req.body.user_id,
        password: req.body.password,
    };

    try {
        const result = await userHandle.create(newUser);

        if (result) {
            res.send(result);
        } else {
            res.status(400);
            res.send('Failed to create user');
        }
    } catch (err) {
        res.status(400);
        res.send(err);
    }
};

const authenticate = async (req: express.Request, res: express.Response) => {
    const reqUser: User = {
        user_id: req.body.user_id,
        password: req.body.password,
    };

    try {
        const result = await userHandle.authenticate(reqUser);

        if (result) {
            res.send(result);
        } else {
            res.status(400);
            res.send('Failed to validate user');
        }
    } catch (err) {
        res.status(400);
        res.send(err);
    }
};

userRouter.post('/', (req, res) => {
    create(req, res);
});

userRouter.get('/', (req, res) => {
    authenticate(req, res);
});

export default userRouter;
