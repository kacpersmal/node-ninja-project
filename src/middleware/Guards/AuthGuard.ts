import { GetTokenFromRequest } from './utils';
import { NextFunction, Request, Response } from 'express';
import StatusCode from '../../utils/StatusCodes';
import jwt from 'jsonwebtoken';
import config from 'config';

const AuthGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = GetTokenFromRequest(req);
  if (!token) return res.sendStatus(StatusCode.UNAUTHORIZED);

  jwt.verify(token, config.get('JWT.key'), (err: any, payload: any) => {
    if (err) return res.sendStatus(StatusCode.UNAUTHORIZED);
    res.locals.user_id = payload.id;
    res.locals.user_role = payload.user_role;
    next();
  });
};

export default AuthGuard;
