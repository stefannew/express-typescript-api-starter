import { Router } from 'express';

import { getUsersController } from './controllers';
import { getUsers, anotherService } from './services';

export const router = Router();

router.get('/', getUsersController(getUsers, anotherService));
