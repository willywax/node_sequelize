import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import bookRouters from './server/routes/BookRoutes';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/v1/books', bookRouters);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this Node_Sequalize API',
}));

app.listen(port, () => {
  console.log(`App listen to port ${port}`);
});

export default app;
