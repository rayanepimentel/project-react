import express from 'express';
import { getRepository } from 'typeorm';
import Ong from './models/ong'

import './database/connection';

const app = express();

app.use(express.json());

app.post('/ongs', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  const ongsRepository = getRepository(Ong)

  const ong = ongsRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  await ongsRepository.save(ong);

  return response.json({ message: 'Hello' })

});

app.listen(3333);