import { GetPool } from '../utills';

const GetStarlinkData = async (cursor: number) => {
  const pool = GetPool();

  const dt = await pool.query(`SELECT xmin AS cursor,* FROM external_data.starlink WHERE xmin::text::integer > $1 ORDER BY xmin::text::integer DESC`, [cursor]);
  return dt.rows;
};

export default GetStarlinkData;
