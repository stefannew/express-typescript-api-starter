import { Connection, createConnection } from 'typeorm';

import { Config } from './types';

export const createDatabaseConnection = async (config: Config) => await createConnection({
  type: config.database.type,
  name: config.database.name
});
