import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import HttpStatusCode from '../helpers/HttpStatusCode';
import { JwtPayload } from '../helpers/JwtPayload';
const AdminGuard = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, config.get('JWT.key'), (err: any, payload: any) => {
    if (err) return res.sendStatus(HttpStatusCode.UNAUTHORIZED);
    const py = payload as JwtPayload;
    if (py.user_role != 'admin') return res.sendStatus(HttpStatusCode.FORBIDDEN);
    next();
  });
};

export default AdminGuard;
