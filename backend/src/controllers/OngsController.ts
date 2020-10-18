import { Request, Response, request } from 'express';
import { getRepository } from 'typeorm';
import ongView from '../views/orgs_view'

import Ong from '../models/ong';


export default {
  async index(request: Request, response: Response) {
    const ongsRepository = getRepository(Ong)

    const ongs = await ongsRepository.find({
      relations: ['images']
    });

    return response.json(ongView.renderMany(ongs));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const ongsRepository = getRepository(Ong)

    const ong = await ongsRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(ongView.render(ong));
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
  
    const ongsRepository = getRepository(Ong);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename }
    })
  
    const ong = ongsRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    });
  
    await ongsRepository.save(ong);
  
    return response.status(201).json(ong)
  
  }
};