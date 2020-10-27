import { NextFunction, Request, Response } from 'express';
import { ConnectionOptions, Repository } from 'typeorm';

import { User } from './entities/User';

export type Services = {
  usersRepository: Repository<User>
};

export type Controller = (services: Services) => (request: Request, response: Response, next: NextFunction) => void;

export type Environment = {
  DATABASE_NAME: string;
  DATABASE_PASSWORD: string;
  DATABASE_TYPE: 'postgres',
  DATABASE_USER: string;
  PORT: string;
};

export type DatabaseConfig = {
  type: Environment['DATABASE_TYPE'],
  name: Environment['DATABASE_NAME']
}
