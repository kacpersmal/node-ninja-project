import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const AuthRouter = Router();
const controller = new AuthController();

AuthRouter.post('/', controller.Authorize);
export default AuthRouter;
