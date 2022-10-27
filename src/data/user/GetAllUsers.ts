import { GetPool } from '../utills';

const GetAllUsers = async () => {
  const pool = GetPool();
  const res = await pool.query(`SELECT email,id,creation_date FROM auth.users`);

  return res.rows;
};

export default GetAllUsers;
