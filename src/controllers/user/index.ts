import { Router } from 'express';
import { AuthGuard } from '../../middleware';
import GetAllUsersController from './GetAllUsers.controller';

const UsersRouter = Router();

UsersRouter.get('/', AuthGuard, GetAllUsersController);

export default UsersRouter;

export { GetAllUsersController };
