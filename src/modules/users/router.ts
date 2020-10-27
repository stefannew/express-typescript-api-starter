import { Router } from 'express';
import { Services } from '../../core/types';

import { getUsersController } from './controllers';

export const createUsersRouter = (services: Services) => {
  const router = Router();
  
  router.get('/', getUsersController(services));
  
  return router;
}
