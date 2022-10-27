import { Router } from 'express';
import AuthorizeController, { AuthorizeRequestSchema } from './Authorize.controller';
import Authorize from './Authorize.controller';
import { createValidator } from 'express-joi-validation';
const AuthRouter = Router();
const validator = createValidator({ passError: true });
AuthRouter.post('/', validator.body(AuthorizeRequestSchema), AuthorizeController);

export default AuthRouter;
export { Authorize };
