import { Pool } from 'pg';

class DatabaseClient {
  private _connectionString: string;

  constructor(connectionString: string) {
    this._connectionString = connectionString;
  }

  public GetPool() {
    return new Pool({ connectionString: this._connectionString });
  }
}

export default DatabaseClient;
