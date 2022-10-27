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

const BaseClient = new DatabaseClient(process.env.BASE_CONNECTION_STRING ?? 'default');

export { BaseClient };

export default DatabaseClient;
