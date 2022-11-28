import StatusCode from '../utils/StatusCodes';
class HttpException extends Error {
  public status: StatusCode;
  public message: string;
  public metadata: any;
  constructor(status: StatusCode, message: string, metadata?: any) {
    super(message);
    this.status = status;
    this.message = message;
    this.metadata = metadata;
  }
}

export default HttpException;
