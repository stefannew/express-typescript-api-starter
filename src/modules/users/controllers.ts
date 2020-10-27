import { Controller } from '../../core/types';

export const getUsersController: Controller = ({ usersRepository}) => async (_request, response, _next) => {
  const users = await usersRepository.find();

  response.json(users);
}
