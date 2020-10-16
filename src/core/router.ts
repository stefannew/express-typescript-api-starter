import { Router } from 'express';

import { router as usersRouter } from '../modules/users';

export const router = Router();

router.use('/users', usersRouter);
