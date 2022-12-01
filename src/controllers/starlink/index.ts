import { Router } from 'express';
import PopulateController from './Populate.controller';
import DeleteStarlinkDataController from './SoftDeleteStarlink.controller';
import { createValidator } from 'express-joi-validation';
import UpdateStarlinkDataController from './UpdateStarlinkData.controller';
const StarlinkRouter = Router();
const validator = createValidator({ passError: true });
StarlinkRouter.get('/', PopulateController);
StarlinkRouter.delete('/:id', DeleteStarlinkDataController);
StarlinkRouter.patch('/:id', UpdateStarlinkDataController);

export default StarlinkRouter;
