import { GetPool } from '../utills';

const InsertUser = async (email: string, password_hash: string, role_id: string) => {
  const pool = GetPool();

  const res = await pool.query(
    `INSERT INTO auth.users(email,password_hash,role_id)
  VALUES ($1, $2,$3)
  RETURNING *`,
    [email, password_hash, role_id],
  );
  return res.rows[0];
};

export default InsertUser;
