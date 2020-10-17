import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Ong from '../models/ong';


export default {
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