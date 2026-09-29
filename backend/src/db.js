import pg from 'pg';
import 'dotenv/config';

export const pool = new pg.Pool({
  // Falls back to the docker-compose defaults if .env is missing
  connectionString: process.env.DATABASE_URL || 'postgres://niw:niw_password@localhost:5432/niw_knowledge',
  max: 10,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

export const query = (text, params) => pool.query(text, params);
