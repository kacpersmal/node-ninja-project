import { Router } from 'express';
import AuthorizeController from './Authorize.controller';
import Authorize from './Authorize.controller';

const AuthRouter = Router();
AuthRouter.post('/', AuthorizeController);

export default AuthRouter;
export { Authorize };
