import rc from 'rc';

import { Config } from './types';

export const config = rc(process.env.npm_package_name) as Config;
