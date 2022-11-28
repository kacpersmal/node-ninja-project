import { GetPool } from '../utills';

const SoftDeleteUser = async (id: string) => {
  const pool = GetPool();
  const res = await pool.query(
    `UPDATE auth.users
  SET delete_date = NOW()
  WHERE id=$1;`,
    [id],
  );
  return res;
};

export default SoftDeleteUser;
