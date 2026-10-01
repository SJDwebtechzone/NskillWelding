import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.dirname(__dirname);

const schemaPath = path.join(baseDir, 'schema.sql');
const seedPath = path.join(baseDir, 'seed.sql');
const seedHomePath = path.join(baseDir, 'seed_home.sql');
const seedPagesPath = path.join(baseDir, 'seed_pages.sql');
const outputPath = path.join(baseDir, 'niw_full_database.sql');

const files = [
  { header: '-- =========================================================\n-- 1. DATABASE SCHEMA (TABLES & INDEXES)\n-- =========================================================\n', path: schemaPath },
  { header: '\n-- =========================================================\n-- 2. SEED DATA - CATEGORIES, ARTICLES, RESOURCES, FAQS\n-- =========================================================\n', path: seedPath },
  { header: '\n-- =========================================================\n-- 3. SEED DATA - HOMEPAGE COURSES & SITE STATS\n-- =========================================================\n', path: seedHomePath },
  { header: '\n-- =========================================================\n-- 4. SEED DATA - DETAILED PAGES & COURSE OVERVIEWS\n-- =========================================================\n', path: seedPagesPath }
];

let fullContent = '-- National Institute of Welding - Complete Single-File Database\n-- PostgreSQL 16 Compatible - Ready to Import in 1 Click\n\n';

for (const item of files) {
  fullContent += item.header;
  if (fs.existsSync(item.path)) {
    fullContent += fs.readFileSync(item.path, 'utf8') + '\n';
  }
}

fs.writeFileSync(outputPath, fullContent, 'utf8');
console.log(`Successfully generated single file database at: ${outputPath}`);
