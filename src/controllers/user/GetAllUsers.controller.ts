import { NextFunction, Request, Response } from 'express';
import { GetAllUsers } from '../../data/user';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';

const GetAllUsersController = async (req: Request, res: Response, _: NextFunction) => {
  const users = await GetAllUsers();

  return Result(res, users, StatusCode.OK);
};

export default GetAllUsersController;
