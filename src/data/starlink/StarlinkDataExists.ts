import { GetPool } from '../utills';

const StarlinkDataExists = async () => {
  const pool = GetPool();

  const res = await pool.query(`SELECT COUNT(id) FROM external_data.starlink LIMIT 1`);
  return res.rows[0].count > 0;
};

export default StarlinkDataExists;
