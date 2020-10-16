import { createService } from '../../core/utils';
import { User, UserDTO } from './types';

const getUsersRequester = () => Promise.resolve([
  { firstName: 'Test', lastName: 'User', email: 'test@user.com' },
  { firstName: 'Other', lastName: 'User', email: 'other@user.com' }
]);

const getUsersTransformer = (users: UserDTO[]) => users.map(user => ({
  name: `${user.firstName} ${user.lastName}`,
  email: user.email
}));

export const getUsers = createService<void, UserDTO[], User[]>(getUsersRequester, getUsersTransformer);
export const anotherService = createService<void, {}, void>(() => Promise.resolve({}), () => {});

export type GetUsersService = typeof getUsers;
export type AnotherService = typeof anotherService;
