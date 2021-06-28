import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send(
        'Server is up. API is ready for use. Please access the correct endpoint.'
    );
});

export default routes;