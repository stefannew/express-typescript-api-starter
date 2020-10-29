import { Config, Environment } from './types';
import { ConnectionOptions } from "typeorm";

const getEnvironmentVariable = (variable: keyof Environment): string => process.env[variable];

export const config: Config = {
    api: {
        port: getEnvironmentVariable('PORT'),
    },
    database: {
        name: getEnvironmentVariable('DATABASE_NAME'),
        password: getEnvironmentVariable('DATABASE_PASSWORD'),
        type: getEnvironmentVariable('DATABASE_TYPE') as ConnectionOptions['type'],
        username: getEnvironmentVariable('DATABASE_USER'),
        port: getEnvironmentVariable('DATABASE_PORT')
    }
}