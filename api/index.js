import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({ urlencoded: false }));

const port = process.env.PORT || 3000;

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this Node_Sequalize API',
}));

app.listen(port, () => {
  console.log(`App listen to port ${port}`);
});

export default app;
