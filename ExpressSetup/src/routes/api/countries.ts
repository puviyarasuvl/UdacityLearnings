import express from 'express';

const countries = express.Router();

countries.get('/', (req, res) => {
    res.send('Hey there..! Welcome to countries route');
});

export default countries;
