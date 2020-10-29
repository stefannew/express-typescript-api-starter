import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { config } from './core/config';
import { createDatabaseConnection } from './core/database';
import { createApiRouter } from './core/router';
import { createServices } from './core/services';

const init = async () => {
  const api = Express();
  const connection = await createDatabaseConnection(config);
  const services = createServices(connection);

  api.use(createApiRouter(services));

  api.listen(config.api.port, () => console.log(`API listening on port ${config.api.port}`));
}

init();
