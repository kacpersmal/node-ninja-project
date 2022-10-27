import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../exceptions';
import { GetCommitHash } from '../../features/git';
import { GetPackageVersion } from '../../features/version';
import StatusCode from '../../utils/StatusCodes';

const GetVersionController = (req: Request, res: Response, _: NextFunction) => {
  throw new Error('DUpa');
  const result = {
    CommitHash: GetCommitHash(),
    PackageVersion: GetPackageVersion(),
  };
  return res.status(200).json(result);
};

export default GetVersionController;
