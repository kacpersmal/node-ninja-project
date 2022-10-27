import { GetPool } from '../utills';
const GetUserRoleById = async (id: string) => {
  const pool = GetPool();
  const res = await pool.query('SELECT id,name FROM auth.user_roles WHERE id=$1', [id]);
  return res.rows[0];
};

export default GetUserRoleById;
