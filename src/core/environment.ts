import dotenv from 'dotenv';

import { Environment } from './types';

export const getEnvironmentVariable = (variable: keyof Environment): string => process.env[variable];
