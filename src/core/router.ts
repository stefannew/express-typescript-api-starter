import { Router } from 'express';

import { createUsersRouter } from '../modules/users';
import { Services } from './types';

export const createApiRouter = (services: Services) => {
  const router = Router();
  
  router.use('/users', createUsersRouter(services));

  return router;
}
