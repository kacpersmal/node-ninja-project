import { GetPool } from '../utills';

const GetUserById = async (id: string) => {
  const pool = GetPool();
  return (
    await pool.query(
      `SELECT auth.users.delete_date,auth.users.id,auth.users.email,auth.users.password_hash,auth.users.role_id,auth.user_roles.name as user_role FROM auth.users 
  INNER JOIN auth.user_roles
  ON auth.users.role_id = auth.user_roles.id
  WHERE auth.users.id = $1`,
      [id],
    )
  ).rows[0];
};

export default GetUserById;
