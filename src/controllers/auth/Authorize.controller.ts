import { NextFunction, Request, Response } from 'express';
import { InvalidCredentialsException } from '../../exceptions';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';
import { GetUserByEmail } from '../../data/user';
import { GenerateToken } from '../../features/auth';
import bcrypt from 'bcrypt';

const AuthorizeController = async (req: Request, res: Response, next: NextFunction) => {
  const user = await GetUserByEmail(req.body.email);

  if (user == undefined) return next(new InvalidCredentialsException());

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password_hash);

  if (!isPasswordValid) return next(new InvalidCredentialsException());

  return Result(res, { token: GenerateToken(user) }, StatusCode.OK);
};

export default AuthorizeController;
