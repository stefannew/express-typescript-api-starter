import { NextFunction, Request, Response } from 'express';
import { ConnectionOptions, Repository } from 'typeorm';

import { User } from './entities/User';

export type Services = {
  usersRepository: Repository<User>
};

export type Controller = (services: Services) => (request: Request, response: Response, next: NextFunction) => void;

export type Config = {
  api: {
    port: number;
  },
  database: {
    type: 'postgres';
    name: string;
  }
}
