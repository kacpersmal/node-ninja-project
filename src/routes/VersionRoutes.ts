import { Router } from 'express';
import VersionController from '../controllers/VersionController';

const VersionRouter = Router();
const versionController = new VersionController();

VersionRouter.get('/', versionController.GetData);

export default VersionRouter;
