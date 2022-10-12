import config from 'config';
import { PoolConfig } from 'pg';

const GetPoolConfig = () => {
  return config.get('Database') as PoolConfig;
};

export { GetPoolConfig };
