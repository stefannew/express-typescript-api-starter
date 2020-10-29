import { ConnectionOptions, createConnection } from 'typeorm';

import { Config } from './types';

export const createDatabaseConnection = async (config: Config) =>
  await createConnection({
    type: config.database.type,
    password: config.database.password,
    port: parseInt(config.database.port),
    database: config.database.name,
    username: config.database.username,
    synchronize: true,
    entities: [
        `${__dirname}/entities/**/*{.ts,.js}`
    ]
  } as ConnectionOptions);