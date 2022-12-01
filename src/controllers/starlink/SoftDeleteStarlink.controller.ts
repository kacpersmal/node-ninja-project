import { NextFunction, Request, Response } from 'express';
import { SoftDeleteStarlinkData } from '../../data/starlink';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';
const DeleteStarlinkDataController = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params['id'];

  await SoftDeleteStarlinkData(id);
  return Result(res, undefined, StatusCode.OK);
};

export default DeleteStarlinkDataController;
