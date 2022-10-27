import { Response } from 'express';
import HttpStatusCode from '../helpers/HttpStatusCode';
import ApiError from './ApiError';
abstract class BaseController {
  public Send(res: Response, data: any, statusCode: HttpStatusCode = HttpStatusCode.OK): void {
    res.status(statusCode).json(data);
  }

  public Error(res: Response, error: ApiError) {
    res.status(error.statusCode).json(error);
  }
}

export default BaseController;
