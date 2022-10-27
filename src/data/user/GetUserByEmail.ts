import { GetPool } from '../utills';

const GetUserByEmail = async (email: string) => {
  const pool = GetPool();
  return (
    await pool.query(
      `SELECT auth.users.id,auth.users.email,auth.users.password_hash,auth.users.role_id,auth.user_roles.name as user_role FROM auth.users 
  INNER JOIN auth.user_roles
  ON auth.users.role_id = auth.user_roles.id
  WHERE email = $1 AND delete_date IS NULL`,
      [email],
    )
  ).rows[0];
};

export default GetUserByEmail;
