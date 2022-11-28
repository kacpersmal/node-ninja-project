import { NextFunction, Request, Response } from 'express';
import { InvalidCredentialsException } from '../../exceptions';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';
import { GetUserByEmail } from '../../data/user';
import { GenerateToken } from '../../features/auth';
import bcrypt from 'bcrypt';
import * as Joi from 'joi';

const AuthorizeRequestSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required(),
});

const AuthorizeController = async (req: Request, res: Response, next: NextFunction) => {
  const user = await GetUserByEmail(req.body.email);

  if (user == undefined) {
    return next(InvalidCredentialsException);
  }

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password_hash);

  if (!isPasswordValid) {
    return next(InvalidCredentialsException);
  }

  return Result(res, { token: GenerateToken(user) }, StatusCode.OK);
};

export default AuthorizeController;
export { AuthorizeRequestSchema };
