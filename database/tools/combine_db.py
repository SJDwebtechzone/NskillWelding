import os

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

schema_path = os.path.join(base_dir, 'schema.sql')
seed_path = os.path.join(base_dir, 'seed.sql')
seed_home_path = os.path.join(base_dir, 'seed_home.sql')
seed_pages_path = os.path.join(base_dir, 'seed_pages.sql')
output_path = os.path.join(base_dir, 'niw_full_database.sql')

files = [
    ('-- =========================================================\n-- 1. DATABASE SCHEMA (TABLES & INDEXES)\n-- =========================================================\n', schema_path),
    ('\n-- =========================================================\n-- 2. SEED DATA - CATEGORIES, ARTICLES, RESOURCES, FAQS\n-- =========================================================\n', seed_path),
    ('\n-- =========================================================\n-- 3. SEED DATA - HOMEPAGE COURSES & SITE STATS\n-- =========================================================\n', seed_home_path),
    ('\n-- =========================================================\n-- 4. SEED DATA - DETAILED PAGES & COURSE OVERVIEWS\n-- =========================================================\n', seed_pages_path)
]

with open(output_path, 'w', encoding='utf-8') as outfile:
    outfile.write('-- National Institute of Welding - Complete Single File Database\n')
    outfile.write('-- PostgreSQL 16 Compatible - Ready to Import\n\n')
    for header, fpath in files:
        outfile.write(header)
        if os.path.exists(fpath):
            with open(fpath, 'r', encoding='utf-8') as infile:
                outfile.write(infile.read())
                outfile.write('\n')

print(f"Successfully created single-file database at: {output_path}")
