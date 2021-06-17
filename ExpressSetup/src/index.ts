import express from 'express';
import routes from './routes/index';
import logger from './utilities/logger';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
    console.log('Server started successfully at ', port);
});
