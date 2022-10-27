import HttpException from './HttpException';
import StatusCode from '../utils/StatusCodes';
const InvalidCredentialsException = new HttpException(StatusCode.BAD_REQUEST, 'Invalid Credentials');

export { HttpException, InvalidCredentialsException };
