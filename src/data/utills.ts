import { Pool } from 'pg';
import config from 'config';

const GetPool = () => {
  const connectionString = process.env.BASE_CONNECTION_STRING ?? config.get('DB.ConnectionString') ?? 'NOT SPECIFIED';
  return new Pool({ connectionString: connectionString });
};

export { GetPool };
