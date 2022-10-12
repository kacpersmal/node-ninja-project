import { Pool, PoolConfig } from 'pg';
import { GetPoolConfig } from '../helpers/ConfigHelper';

class DatabaseClient {
  private _poolConfig: PoolConfig;

  constructor() {
    this._poolConfig = GetPoolConfig();
  }

  public GetPool() {
    return new Pool(this._poolConfig);
  }
}

export default new DatabaseClient();
