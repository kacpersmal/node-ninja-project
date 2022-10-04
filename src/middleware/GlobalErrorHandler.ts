import { NextFunction, Response, Request } from "express";
import { ExpressJoiError } from "express-joi-validation";

interface HttpErrorResponse {
    StatusCode: number;
    Message: string | string[];
}

const GlobalErrorHandler = (err: ExpressJoiError,req: Request,res: Response,next: NextFunction) => {
    
    let response : HttpErrorResponse = {
        Message: "Internal Server Error",
        StatusCode: 500
    };

    if(err.error?.isJoi){
        response.Message = err.error.message
        response.StatusCode = 400
    }

    res.status(response.StatusCode).send(response);
}

export default GlobalErrorHandler;