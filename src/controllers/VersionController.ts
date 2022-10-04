import { Request, Response, NextFunction } from 'express';
import { ITestBodyRequest } from '../dto/requests/VersionControllerRequests';
import { IGetDataResponse } from '../dto/responses/VersionControllerResponses';
import GitService from '../services/GitService';

class VersionController { 

    public async GetData(req: Request, res: Response<IGetDataResponse>, next: NextFunction) {
        const resp : IGetDataResponse = {
            CommitHash: GitService.GetCommitHash(),
            PackageVersion: process.env.npm_package_version ?? "not specified"
        }
        res.json(resp);
    }

    public async TestValidation(req: Request<{},{},ITestBodyRequest>, res: Response, next: NextFunction) {
        console.log(req.body);
        const resp = {
            Test: "tak"
        }
        res.json(resp);
    }

}

export default VersionController;