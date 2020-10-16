import { Controller } from '../../core/types';
import { AnotherService, GetUsersService } from './services';

export const getUsersController: Controller<[GetUsersService, AnotherService]> = (getUsers, anotherService) => async (_request, response, _next) => {
  const users = await getUsers();
  const nothing = await anotherService();

  response.json(users);
}
