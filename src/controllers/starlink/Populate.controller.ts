import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import StatusCode from '../../utils/StatusCodes';
import { Result } from '../utills';
import { GetStarlinkData, InsertMultipleRecords, StarlinkDataExists } from '../../data/starlink';
const PopulateController = async (req: Request, res: Response, next: NextFunction) => {
  const dataExists = await StarlinkDataExists();
  const cursor = req.query['cursor'] ? Number(req.query['cursor']) : 0;

  if (!dataExists) {
    const starlinkAPiResponse = await fetch('https://api.spacexdata.com/v4/starlink');
    const starlinkData = await starlinkAPiResponse.json();
    await InsertMultipleRecords(starlinkData);
  }

  const data = await GetStarlinkData(cursor);

  return Result(res, data, StatusCode.OK);
};

export default PopulateController;
