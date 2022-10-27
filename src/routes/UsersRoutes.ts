import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import AdminGuard from '../guards/AdminGuard';
import UserGuard from '../guards/UserGuard';
const UsersRouter = Router();
const controller = new UsersController();

UsersRouter.get('/', UserGuard, controller.GetAllUsers);
UsersRouter.post('/', AdminGuard, controller.CreateNewUser);

export default UsersRouter;
