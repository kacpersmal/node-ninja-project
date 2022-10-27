import { ErrorRequestHandler } from 'express';
import { HttpException } from '../exceptions';
import StatusCode from '../utils/StatusCodes';

const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpException) {
    const exc = err as HttpException;
    return res.status(exc.status).json({ message: exc.message, metadata: exc.metadata });
  }

  return res.status(StatusCode.BAD_REQUEST).json({ message: 'Unknown exception' });
};

export default ErrorHandler;
