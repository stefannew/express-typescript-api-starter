import * as Express from 'express';

import { router } from './core/router';

const PORT = 3000;

const api = Express();

api.use(router);
api.listen(PORT, () => console.log(`API listnening on port ${PORT}`));
