import { NextFunction, Request, Response } from 'express';
import { UpdateStarlinkData } from '../../data/starlink';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';

const UpdateStarlinkDataController = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params['id'];
  const body = JSON.stringify(req.body);

  await UpdateStarlinkData(id, body);
  Result(res, undefined, StatusCode.OK);
};

export default UpdateStarlinkDataController;
