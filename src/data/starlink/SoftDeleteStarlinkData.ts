import { GetPool } from '../utills';

const SoftDeleteStarlinkData = async (id: any) => {
  const pool = GetPool();
  await pool.query('BEGIN');
  try {
    await pool.query(
      `UPDATE external_data.starlink
    SET delete_date = NOW(),
     edit_date = NOW()
    WHERE id=$1`,
      [id],
    );
    await pool.query('COMMIT');
  } catch (error) {
    await pool.query('ROLLBACK');
  }
};

export default SoftDeleteStarlinkData;
