import { Application } from 'express';
import VersionRouter from './VersionRoutes';
import UsersRouter from './UsersRoutes';
import AuthRouter from './AuthRoutes';

const AddApplicationRoutes = (app: Application) => {
  app.use('/version', VersionRouter);
  app.use('/users', UsersRouter);
  app.use('/auth', AuthRouter);
};

export default AddApplicationRoutes;
