import { Router } from 'express';
import GetVersionController from './GetVersion.controller';

const VersionRouter = Router();

VersionRouter.get('/', GetVersionController);

export default VersionRouter;
export { GetVersionController };
