import { Router } from 'express';
import VersionController from '../controllers/VersionController';
import AdminGuard from '../guards/AdminGuard';
const VersionRouter = Router();
const versionController = new VersionController();

VersionRouter.get('/', AdminGuard, versionController.GetData);

export default VersionRouter;
