import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Ong from '../models/ong';


export default {
  async index(request: Request, response: Response) {
    const ongsRepository = getRepository(Ong)

    const ongs = await ongsRepository.find();

    return response.json(ongs);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const ongsRepository = getRepository(Ong)

    const ong = await ongsRepository.findOneOrFail(id);

    return response.json(ong);
  },

  async create(request: Request, response: Response) {
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
  
    return response.status(201).json(ong)
  
  }
};