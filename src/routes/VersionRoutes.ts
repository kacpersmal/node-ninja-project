import { Router } from 'express';
import VersionController from '../controllers/VersionController';
import GlobalValidator from '../validation/GlobalValidator';
import { ITestBodyRequestSchema } from '../validation/schemas/VersionControllerRequestsSchemas';

const VersionRouter = Router();
const versionController = new VersionController();

VersionRouter.get('/', versionController.GetData);
VersionRouter.post('/', GlobalValidator.body(ITestBodyRequestSchema), versionController.TestValidation);

export default VersionRouter;
