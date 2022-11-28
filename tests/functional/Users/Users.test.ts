import CreateUserTests from './CreateUser';
import DeleteUserTests from './DeleteUser';
import GetUserByIdTests from './GetUserById';
import GetUsersTests from './GetUsers';

describe('User Tests', () => {
  DeleteUserTests();
  GetUsersTests();
  CreateUserTests();
  GetUserByIdTests();
});
