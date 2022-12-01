import { Router } from 'express';
import VersionRouter from './version';
import UsersRouter from './user';
import AuthRouter from './auth';
import StarlinkRouter from './starlink';
const AppRoutes = Router();

AppRoutes.use('/version', VersionRouter);
AppRoutes.use('/users', UsersRouter);
AppRoutes.use('/auth', AuthRouter);
AppRoutes.use('/starlink', StarlinkRouter);
export default AppRoutes;
