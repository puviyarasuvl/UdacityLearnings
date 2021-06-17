import express from 'express';
import convert from './api/convert';
import countries from './api/countries';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hey there..! Welcome to root route');
});

routes.use('/countries', countries);

routes.use('/convert', convert);

export default routes;
