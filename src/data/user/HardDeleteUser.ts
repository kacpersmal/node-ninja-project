import { GetPool } from '../utills';

const HardDeleteUser = async (id: string) => {
  const pool = GetPool();
  const res = await pool.query(
    `DELETE FROM auth.users
  WHERE id=$1;`,
    [id],
  );
  return res;
};

export default HardDeleteUser;
