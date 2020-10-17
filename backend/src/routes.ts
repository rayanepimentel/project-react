import { Router } from 'express';
import OngsController from './controllers/OngsController'

const routes = Router();

routes.post('/ongs', OngsController.create);

export default routes;