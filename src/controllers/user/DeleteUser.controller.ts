import { NextFunction, Request, Response } from 'express';
import { GetUserById, SoftDeleteUser } from '../../data/user';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';
import * as Joi from 'joi';
import { HttpException } from '../../exceptions';

const DeleteUserRequestSchema = Joi.object({
  userId: Joi.string().required(),
});

const UserNotFoundException = (id: string) => new HttpException(StatusCode.NOT_FOUND, 'User with given id does not exist!', { id: id });
const UnpriviligedAccessException = () => new HttpException(StatusCode.FORBIDDEN, 'Unpriviliged Access');

const DeleteUserController = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params['userId'];

  if (res.locals.user_role != 'admin') {
    if (res.locals.user_id != id) {
      next(UnpriviligedAccessException());
    }
  }

  if ((await GetUserById(id)) == undefined) next(UserNotFoundException(id));

  const rs = await SoftDeleteUser(id);

  return Result(res, undefined, StatusCode.OK);
};

export { DeleteUserRequestSchema };
export default DeleteUserController;
