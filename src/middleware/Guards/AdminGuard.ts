import { ADMIN_ROLE, GetTokenFromRequest } from './utils';
import { NextFunction, Request, Response } from 'express';
import StatusCode from '../../utils/StatusCodes';
import jwt from 'jsonwebtoken';
import config from 'config';
const AdminGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = GetTokenFromRequest(req);
  if (!token) return res.sendStatus(StatusCode.UNAUTHORIZED);

  jwt.verify(token, config.get('JWT.key'), (err: any, payload: any) => {
    if (err) return res.sendStatus(StatusCode.UNAUTHORIZED);
    if (payload.user_role != ADMIN_ROLE) return res.sendStatus(StatusCode.FORBIDDEN);
    res.locals.user_id = payload.id;
    res.locals.user_role = payload.user_role;
    next();
  });
};

export default AdminGuard;
