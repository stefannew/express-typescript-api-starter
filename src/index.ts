import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { getEnvironmentVariable } from './core/environment';
import { createDatabaseConnection } from './core/database';
import { createApiRouter } from './core/router';
import { createServices } from './core/services';

const init = async () => {
  const api = Express();
  const connection = await createDatabaseConnection({
    // @ts-ignore
    type: getEnvironmentVariable('DATABASE_TYPE'),
    name: getEnvironmentVariable('DATABASE_NAME')
  });
  const services = createServices(connection);

  api.use(createApiRouter(services));
  api.listen(getEnvironmentVariable('PORT'), () => console.log(`${process.env.name} listening on port ${getEnvironmentVariable('PORT')}`));
}

init();
