import { Connection } from 'typeorm';

import { User } from '../entities/User';

export const createServices = (connection: Connection) => {
  return {
    usersRepository: connection.getRepository(User),
  }
};
