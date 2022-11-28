import { GetPool } from '../utills';
const SaveUser = async (id: string, user: { email?: string; password_hash?: string; role_id?: string }) => {
  const pool = GetPool();

  await pool.query('BEGIN');
  const transactionId = await (await pool.query(`SELECT * FROM pg_current_xact_id_if_assigned();`)).rows[0];

  if (user.email) {
    await pool.query(
      `UPDATE auth.users
    SET email=$1
    WHERE id=$2;`,
      [user.email, id],
    );
  }

  if (user.password_hash) {
    await pool.query(
      `UPDATE auth.users
    SET password_hash=$1
    WHERE id=$2;`,
      [user.password_hash, id],
    );
  }

  if (user.role_id) {
    await pool.query(
      `UPDATE auth.users
    SET role_id=$1
    WHERE id=$2;`,
      [user.role_id, id],
    );
  }

  if (user.role_id || user.email || user.password_hash) {
    await pool.query(
      `UPDATE auth.users
    SET edit_date=NOW()
    WHERE id=$1;`,
      [id],
    );
  }

  await pool.query('COMMIT');
};

export default SaveUser;
