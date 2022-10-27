import HttpStatusCode from '../helpers/HttpStatusCode';
class ApiError {
  message: string;
  statusCode: HttpStatusCode;
  metaData: any;

  constructor(message: string, metadata: any = undefined, statusCode: HttpStatusCode = HttpStatusCode.BAD_REQUEST) {
    this.message = message;
    this.statusCode = statusCode;
    this.metaData = metadata;
  }
}

export default ApiError;
