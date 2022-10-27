import { Router } from 'express';
import GetAllUsersController from './GetAllUsers.controller';

const UsersRouter = Router();

UsersRouter.get('/', GetAllUsersController);

export default UsersRouter;

export { GetAllUsersController };
