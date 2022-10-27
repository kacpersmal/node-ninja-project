import { NextFunction, Request, Response } from 'express';
import { GetCommitHash } from '../../features/git';
import { GetPackageVersion } from '../../features/version';
import { Result } from '../utills';

const GetVersionController = (req: Request, res: Response, _: NextFunction) => {
  const result = {
    CommitHash: GetCommitHash(),
    PackageVersion: GetPackageVersion(),
  };
  return Result(res, result);
};

export default GetVersionController;
