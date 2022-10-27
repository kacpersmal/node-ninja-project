import { NextFunction, Response, Request } from 'express';
import GetSingleUserByEmail, { GetSingleUserByEmailResponse } from '../features/User/GetSingleUserByEmail/GetSingleUserByEmail';
import BaseController from '../abstraction/BaseController';
import bcrypt from 'bcrypt';
import ApiError from '../abstraction/ApiError';
import jwt from 'jsonwebtoken';
import config from 'config';

interface AuthRequest {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

class AuthController extends BaseController {
  constructor() {
    super();
  }

  public async Authorize(req: Request<AuthRequest>, res: Response, next: NextFunction) {
    const user = await GetSingleUserByEmail.HandleAsync({ email: req.body.username });

    if (user == undefined) return super.Error(res, new ApiError('Invalid Credentials'));

    const isValidPassword = await bcrypt.compare(req.body.password, user.password_hash);

    if (!isValidPassword) return super.Error(res, new ApiError('Invalid Credentials'));

    const payload = {
      user_id: user.id,
      user_role: user.user_role,
    };

    const jwtToken = jwt.sign(payload, config.get('JWT.key'), { expiresIn: config.get('JWT.expiration') });

    const result: AuthResponse = {
      token: jwtToken,
    };

    return super.Send(res, result);
  }
}

export default AuthController;
