import { Response } from 'express';
import StatusCodes from '../utils/StatusCodes';
const Result = async (res: Response, data: any, statusCode: StatusCodes = StatusCodes.OK) => {
  return res.status(statusCode).json(data);
};

export { Result };
