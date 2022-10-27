import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import HttpStatusCode from '../helpers/HttpStatusCode';
const UserGuard = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, config.get('JWT.key'), (err: any, payload: any) => {
    if (err) return res.sendStatus(HttpStatusCode.UNAUTHORIZED);
    next();
  });
};

export default UserGuard;
