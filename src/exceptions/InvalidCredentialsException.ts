import StatusCode from '../utils/StatusCodes';
import { HttpException } from './';
class InvalidCredentialsException extends HttpException {
  constructor() {
    super(StatusCode.BAD_REQUEST, 'Invalid Credentials');
  }
}

export default InvalidCredentialsException;
