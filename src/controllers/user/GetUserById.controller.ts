import { NextFunction, Request, Response } from 'express';
import { GetUserById } from '../../data/user';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';
import { HttpException } from '../../exceptions';

const UserNotFoundException = new HttpException(StatusCode.NOT_FOUND, 'User with given id does not exists');

const GetUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params['userId'];
  const user = await GetUserById(userId);
  if (user == undefined) return next(UserNotFoundException);

  return Result(res, { id: user.id, email: user.email, role_id: user.role_id, user_role: user.user_role }, StatusCode.OK);
};

export default GetUserByIdController;
