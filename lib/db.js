import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL, // add this to your .env file
  ssl: { rejectUnauthorized: false }, // Neon requires SSL
});

export async function query(text, params) {
  const res = await pool.query(text, params);
  return res;
}
