import { createConnection } from 'typeorm';

import { DatabaseConfig } from './types';

export const createDatabaseConnection = async (config: DatabaseConfig) => await createConnection({
  type: config.type,
  name: config.name
});
