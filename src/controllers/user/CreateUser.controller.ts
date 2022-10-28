import { Request, Response, NextFunction } from 'express';
import { GetUserRoleById } from '../../data/user_roles';
import { InsertUser, GetUserByEmail } from '../../data/user';
import { HttpException } from '../../exceptions';
import StatusCode from '../../utils/StatusCodes';
import * as Joi from 'joi';
import { HashPassword } from '../../features/auth/';
import { Result } from '../utills';
const UserRoleNotFoundException = new HttpException(StatusCode.BAD_REQUEST, 'User role with given ID does not exist');
const UserAlreadyExistsException = new HttpException(StatusCode.BAD_REQUEST, 'User with given email already exists');

const CreateUserRequestSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required(),
  role_id: Joi.string().required(),
});

const CreateUserController = async (req: Request, res: Response, next: NextFunction) => {
  if (!(await GetUserRoleById(req.body.role_id))) return next(UserRoleNotFoundException);
  if (await GetUserByEmail(req.body.email)) return next(UserAlreadyExistsException);

  const password_hash = await HashPassword(req.body.password);
  await InsertUser(req.body.email, password_hash, req.body.role_id);
  return Result(res, undefined, StatusCode.OK);
};

export default CreateUserController;
export { CreateUserRequestSchema };
