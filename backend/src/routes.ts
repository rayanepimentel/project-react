import { Router } from 'express';
import OngsController from './controllers/OngsController'

const routes = Router();


routes.get('/ongs', OngsController.index);
routes.get('/ongs/:id', OngsController.show);
routes.post('/ongs', OngsController.create);

export default routes;