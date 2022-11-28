import { NextFunction, Request, Response } from 'express';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';
import * as Joi from 'joi';
import { GetUserById, SaveUser } from '../../data/user';
import { HttpException } from '../../exceptions';
import jsonpatch from 'fast-json-patch';
import { HashPassword } from '../../features/auth';

const EditUserParamsSchema = Joi.object({
  userId: Joi.string().required(),
});
const EditUserBodySchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string(),
});

const UserNotFoundException = new HttpException(StatusCode.NOT_FOUND, 'User with given id does not exists');

const EditUserController = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params['userId'];
  const user = await GetUserById(userId);
  if (user == undefined) return next(UserNotFoundException);

  await SaveUser(userId, { email: req.body.email, password_hash: await HashPassword(req.body.password) });

  return Result(res, {}, StatusCode.OK);
};

export { EditUserParamsSchema, EditUserBodySchema };
export default EditUserController;
