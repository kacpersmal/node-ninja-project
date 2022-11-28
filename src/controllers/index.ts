import { Router } from 'express';
import VersionRouter from './version';
import UsersRouter from './user';
import AuthRouter from './auth';
const AppRoutes = Router();

AppRoutes.use('/version', VersionRouter);
AppRoutes.use('/users', UsersRouter);
AppRoutes.use('/auth', AuthRouter);
export default AppRoutes;
