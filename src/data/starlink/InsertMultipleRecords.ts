import { GetPool } from '../utills';
const InsertMultipleRecords = async (data: any) => {
  const pool = GetPool();

  await pool.query(`BEGIN`);
  for (const element of data) {
    const json = JSON.stringify(element);
    await pool.query(`INSERT INTO external_data.starlink(data) VALUES($1)`, [json]);
  }
  await pool.query('COMMIT');
};

export default InsertMultipleRecords;
