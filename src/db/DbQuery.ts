import fs from 'fs';
import path from 'path';
import { QueryResult } from 'pg';
import DbClient from '../db/DatabaseClient';

class DbQuery<TResult> {
  private _sql: string;
  private _dbClient: DbClient;

  constructor(client: DbClient, sql: string, { fromFile = false, rootDir = __dirname }) {
    this._dbClient = client;
    if (fromFile) {
      this._sql = this.QueryFromFile(rootDir, sql);
      return;
    }

    this._sql = sql;
  }

  public async ExecuteAsync(params?: Array<any>): Promise<TResult[]> {
    const pool = this._dbClient.GetPool();
    const result = await pool.query(this._sql, params);
    return result.rows;
  }

  private QueryFromFile(dir: string, name: string): string {
    return fs.readFileSync(path.join(dir, name)).toString().trim();
  }
}

export default DbQuery;
