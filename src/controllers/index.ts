import { Router } from 'express';
import VersionRouter from './version';

const AppRoutes = Router();

AppRoutes.use('/version', VersionRouter);

export default AppRoutes;
