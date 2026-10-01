// Creates tables and loads seed data directly into PostgreSQL: npm run db:init
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pool } from '../db.js';

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../database');
const fullFile = path.join(dir, 'niw_full_database.sql');

try {
  const sql = await fs.readFile(fullFile, 'utf8');
  await pool.query(sql);
  console.log(`Successfully initialized database using single file: niw_full_database.sql`);
} catch {
  const files = ['schema.sql', 'seed.sql', 'seed_home.sql', 'seed_pages.sql'];
  for (const file of files) {
    const sql = await fs.readFile(path.join(dir, file), 'utf8');
    await pool.query(sql);
    console.log(`Ran ${file}`);
  }
}
await pool.end();
