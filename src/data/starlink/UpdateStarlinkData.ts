import { GetPool } from '../utills';

const UpdateStarlinkData = async (id: any, data: any) => {
  const pool = GetPool();
  await pool.query('BEGIN');
  await pool.query(
    `UPDATE external_data.starlink
  SET data=$1,
   edit_date=NOW()
  WHERE id=$2;`,
    [data, id],
  );
  await pool.query('COMMIT');
};

export default UpdateStarlinkData;
