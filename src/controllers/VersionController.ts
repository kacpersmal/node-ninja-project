import { Request, Response, NextFunction } from 'express';
import { IGetDataResponse } from '../dto/responses/VersionControllerResponses';
import GitService from '../services/GitService';
import { version } from '../../package.json';
class VersionController {
  public async GetData(req: Request, res: Response<IGetDataResponse>, next: NextFunction) {
    const resp: IGetDataResponse = {
      CommitHash: GitService.GetCommitHash(),
      PackageVersion: version,
    };
    res.json(resp);
  }
}

export default VersionController;
