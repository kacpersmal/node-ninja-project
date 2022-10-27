import { GetTokenFromRequest } from './utils';
import { NextFunction, Request, Response } from 'express';
import StatusCode from '../../utils/StatusCodes';
import jwt from 'jsonwebtoken';
import config from 'config';

const AuthGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = GetTokenFromRequest(req);
  console.log(token);
  if (!token) return res.sendStatus(StatusCode.UNAUTHORIZED);

  jwt.verify(token, config.get('JWT.key'), (err: any, payload: any) => {
    if (err) return res.sendStatus(StatusCode.UNAUTHORIZED);
    next();
  });
};

export default AuthGuard;
