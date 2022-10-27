import { Pool } from 'pg';

const GetPool = () => {
  const connectionString = process.env.BASE_CONNECTION_STRING;
  return new Pool({ connectionString: connectionString });
};

export { GetPool };
