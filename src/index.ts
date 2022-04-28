import express from 'express';
import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') dotenv.config();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const cors = require('cors');
import HeroModel from './HeroModel';
import { validateBody } from './middleware';
import { mongoError } from './utility';

const app = express();
const port = process.env.PORT || '8000';

app.use(cors());
app.use(bodyParser.json());

app
  .route('/heroes')
  .get((_, res) => {
    HeroModel.find({}).then((result) => res.send(result));
  })
  .post(validateBody, (req, res) => {
    const Hero = new HeroModel({ ...req.body });
    Hero.save()
      .then((result) => res.send(result))
      .catch((error) => mongoError(error, res));
  });

app
  .route('/heroes/:id')
  .get((req, res) => {
    HeroModel.findById(req.params.id)
      .then((result) => res.send(result))
      .catch((error) => mongoError(error, res));
  })
  .patch((req, res) => {
    HeroModel.updateOne({ _id: req.params.id }, { ...req.body })
      .then((result) => res.send(result))
      .catch((err) => mongoError(err, res));
  })
  .delete((req, res) => {
    HeroModel.deleteOne({ _id: req.params.id })
      .then((result) => res.send(result))
      .catch((err) => mongoError(err, res));
  });

app.all('/', (_, res) =>
  res.send('Use /heroes or /heroes/:id to interact with API.')
);

app.all('*', (_, res) =>
  res.status(404).send({ error: 'Resource not found.' })
);

mongoose
  .connect(
    `mongodb+srv://ninja:${process.env.PASSWORD}@cluster0.pzedf.mongodb.net/jsninj-heroes?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  });
