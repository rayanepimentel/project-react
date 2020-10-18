import { Request, Response, request } from 'express';
import { getRepository } from 'typeorm';
import ongView from '../views/orgs_view';
import * as Yup from 'yup';

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
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(500),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  
    const ong = ongsRepository.create(data);
  
    await ongsRepository.save(ong);
  
    return response.status(201).json(ong)
  
  }
};