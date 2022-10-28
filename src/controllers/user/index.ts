import { Router } from 'express';
import { AdminGuard, AuthGuard } from '../../middleware';
import GetAllUsersController from './GetAllUsers.controller';
import CreateUserController, { CreateUserRequestSchema } from './CreateUser.controller';
import DeleteUserController, { DeleteUserRequestSchema } from './DeleteUser.controller';
import { createValidator } from 'express-joi-validation';

const UsersRouter = Router();
const validator = createValidator({ passError: true });
UsersRouter.get('/', AuthGuard, GetAllUsersController);
UsersRouter.post('/', AdminGuard, validator.body(CreateUserRequestSchema), CreateUserController);
UsersRouter.delete('/:userId', AdminGuard, validator.params(DeleteUserRequestSchema), DeleteUserController);
export default UsersRouter;

export { GetAllUsersController, CreateUserController };
