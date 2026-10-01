-- National Institute of Welding - Complete Single-File Database
-- PostgreSQL 16 Compatible - Ready to Import in 1 Click

-- =========================================================
-- 1. DATABASE SCHEMA (TABLES & INDEXES)
-- =========================================================
-- National Institute of Welding - Knowledge Center schema
CREATE TABLE IF NOT EXISTS categories (
  id          SERIAL PRIMARY KEY,
  slug        VARCHAR(80)  UNIQUE NOT NULL,
  name        VARCHAR(120) NOT NULL,
  icon        VARCHAR(40)  NOT NULL,                    -- key mapped to an icon in the frontend
  count_type  VARCHAR(20)  NOT NULL DEFAULT 'articles', -- 'articles' | 'videos'
  sort_order  INT          NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS articles (
  id            SERIAL PRIMARY KEY,
  slug          VARCHAR(160) UNIQUE NOT NULL,
  title         VARCHAR(200) NOT NULL,
  excerpt       TEXT         NOT NULL,
  content       TEXT         NOT NULL,
  category_id   INT REFERENCES categories(id) ON DELETE SET NULL,
  image_url     TEXT,
  read_minutes  INT          NOT NULL DEFAULT 5,
  is_featured   BOOLEAN      NOT NULL DEFAULT FALSE,
  has_video     BOOLEAN      NOT NULL DEFAULT FALSE,
  published_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_articles_category  ON articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published_at DESC);

CREATE TABLE IF NOT EXISTS resources (
  id              SERIAL PRIMARY KEY,
  title           VARCHAR(200) NOT NULL,
  file_type       VARCHAR(10)  NOT NULL,   -- PDF | DOC | XLS
  size_label      VARCHAR(20)  NOT NULL,   -- e.g. '2.4 MB'
  file_url        TEXT         NOT NULL,   -- '/files/x.pdf' (served by the API) or a full https URL
  download_count  INT          NOT NULL DEFAULT 0,
  sort_order      INT          NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS videos (
  id             SERIAL PRIMARY KEY,
  title          VARCHAR(200) NOT NULL,
  description    TEXT         NOT NULL,
  youtube_id     VARCHAR(40),
  thumbnail_url  TEXT,
  duration       VARCHAR(10)  NOT NULL,
  category_id    INT REFERENCES categories(id) ON DELETE SET NULL,
  published_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS faqs (
  id          SERIAL PRIMARY KEY,
  question    VARCHAR(255) NOT NULL,
  answer      TEXT         NOT NULL,
  is_featured BOOLEAN      NOT NULL DEFAULT TRUE,
  sort_order  INT          NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id          SERIAL PRIMARY KEY,
  email       VARCHAR(255) UNIQUE NOT NULL,
  source      VARCHAR(60)  NOT NULL DEFAULT 'knowledge-center',
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ===== Homepage =====
CREATE TABLE IF NOT EXISTS courses (
  id           SERIAL PRIMARY KEY,
  slug         VARCHAR(120) UNIQUE NOT NULL,
  title        VARCHAR(120) NOT NULL,
  short_desc   TEXT         NOT NULL,
  icon         VARCHAR(40)  NOT NULL,   -- key mapped to an icon in the frontend
  image_url    TEXT,
  duration     VARCHAR(40),
  level        VARCHAR(60),
  show_on_home BOOLEAN      NOT NULL DEFAULT TRUE,
  sort_order   INT          NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS site_stats (
  id          SERIAL PRIMARY KEY,
  value       VARCHAR(20)  NOT NULL,   -- '15+'
  label       VARCHAR(60)  NOT NULL,   -- 'Years'
  sub_label   VARCHAR(80)  NOT NULL,   -- 'Of Excellence'
  icon        VARCHAR(40)  NOT NULL,
  sort_order  INT          NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS facilities (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(120) NOT NULL,
  caption     VARCHAR(200) NOT NULL,
  image_url   TEXT,
  sort_order  INT          NOT NULL DEFAULT 0
);

-- ===== v3: full homepage, training pages, enquiries =====
-- Safe to re-run: upgrades databases created by earlier versions.
ALTER TABLE faqs    ADD COLUMN IF NOT EXISTS scope VARCHAR(30) NOT NULL DEFAULT 'knowledge'; -- 'knowledge' | 'home'
ALTER TABLE courses ADD COLUMN IF NOT EXISTS tagline          VARCHAR(200);
ALTER TABLE courses ADD COLUMN IF NOT EXISTS overview         TEXT;
ALTER TABLE courses ADD COLUMN IF NOT EXISTS mode             VARCHAR(60) DEFAULT 'Theory + Practical';
ALTER TABLE courses ADD COLUMN IF NOT EXISTS location         VARCHAR(80) DEFAULT 'Chennai, India';
ALTER TABLE courses ADD COLUMN IF NOT EXISTS video_youtube_id VARCHAR(40);
ALTER TABLE courses ADD COLUMN IF NOT EXISTS learn_points     JSONB NOT NULL DEFAULT '[]';
ALTER TABLE courses ADD COLUMN IF NOT EXISTS modules          JSONB NOT NULL DEFAULT '[]'; -- [{title, points[]}]
ALTER TABLE courses ADD COLUMN IF NOT EXISTS details          JSONB NOT NULL DEFAULT '[]'; -- [{label, value}]
ALTER TABLE courses ADD COLUMN IF NOT EXISTS careers          JSONB NOT NULL DEFAULT '[]';
ALTER TABLE courses ADD COLUMN IF NOT EXISTS faqs             JSONB NOT NULL DEFAULT '[]'; -- [{q, a}]
ALTER TABLE courses ADD COLUMN IF NOT EXISTS gallery          JSONB NOT NULL DEFAULT '[]'; -- [{title, image_url}]

CREATE TABLE IF NOT EXISTS testimonials (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(120) NOT NULL,
  course       VARCHAR(120) NOT NULL,
  quote        TEXT         NOT NULL,
  rating       INT          NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  photo_url    TEXT,
  is_published BOOLEAN      NOT NULL DEFAULT TRUE,
  sort_order   INT          NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS recruiters (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(120) UNIQUE NOT NULL,
  logo_url    TEXT,              -- only use a logo with the company's permission
  sort_order  INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS enquiries (
  id          SERIAL PRIMARY KEY,
  full_name   VARCHAR(120) NOT NULL,
  whatsapp    VARCHAR(20)  NOT NULL,
  email       VARCHAR(255),
  interest    VARCHAR(120),
  experience  VARCHAR(60),
  message     TEXT,
  source_page VARCHAR(200),
  status      VARCHAR(20)  NOT NULL DEFAULT 'new',   -- new | contacted | enrolled | closed
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at DESC);

-- ===== v3.1: per-course hero text, industries, related courses =====
ALTER TABLE courses ADD COLUMN IF NOT EXISTS intro         TEXT;                          -- hero paragraph
ALTER TABLE courses ADD COLUMN IF NOT EXISTS industries    JSONB NOT NULL DEFAULT '[]';   -- icon keys, see CourseSections.jsx
ALTER TABLE courses ADD COLUMN IF NOT EXISTS related_slugs JSONB NOT NULL DEFAULT '[]';   -- up to 3 course slugs


-- =========================================================
-- 2. SEED DATA - CATEGORIES, ARTICLES, RESOURCES, FAQS
-- =========================================================
INSERT INTO categories (slug, name, icon, count_type, sort_order) VALUES
 ('welding-basics','Welding Basics','welder','articles',1),
 ('welding-processes','Welding Processes','pipe','articles',2),
 ('welding-quality','Welding Quality','shield','articles',3),
 ('codes-standards','Codes & Standards','book','articles',4),
 ('safety-ppe','Safety & PPE','hardhat','articles',5),
 ('career-industry','Career & Industry','chart','articles',6),
 ('videos-tutorials','Videos & Tutorials','play','videos',7)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO articles (slug,title,excerpt,content,category_id,read_minutes,is_featured,has_video,published_at) VALUES
 ('what-is-welding-complete-guide-for-beginners','What is Welding? A Complete Guide for Beginners',
  'Learn the fundamentals of welding, its importance, types and real-world applications.',
  'Welding joins two metal parts by melting them at the joint and letting them fuse as they cool. It is used in pipelines, bridges, ships, pressure vessels, power plants and almost every fabricated structure.

The most common processes are ARC (SMAW), TIG (GTAW), MIG/MAG (GMAW) and flux-cored welding. Each uses a different heat source and shielding method, which makes it better suited to certain materials, thicknesses and positions.

A beginner usually starts with ARC welding on carbon steel plate, learns to control arc length, travel speed and electrode angle, and then moves on to TIG and MIG before attempting position welding such as 3G and 6G.',
  (SELECT id FROM categories WHERE slug='welding-basics'),5,TRUE,FALSE,'2026-05-10'),
 ('tig-vs-mig-vs-arc-welding','TIG vs MIG vs ARC Welding – Which Process is Right for You?',
  'A detailed comparison to help you understand the strengths, limitations and best applications.',
  'ARC welding (SMAW) is portable, works outdoors and handles dirty or rusty steel well. It is the most common starting point for new welders.

TIG welding (GTAW) gives the cleanest, most precise welds and is the standard for stainless steel, thin sections and critical root passes in pipe welding. It is slower and needs good hand control.

MIG/MAG welding (GMAW) feeds wire continuously, so it is fast and productive on fabrication and structural work. It needs shielding gas, which makes it less suited to windy sites.

For Gulf and oil-and-gas jobs, strong TIG root and ARC fill/cap skills in 6G are the combination employers most often test for.',
  (SELECT id FROM categories WHERE slug='welding-processes'),7,TRUE,FALSE,'2026-05-08'),
 ('understanding-weld-defects-and-prevention','Understanding Weld Defects and How to Prevent Them',
  'Identify common weld defects, their causes and effective prevention techniques.',
  'Common weld defects include porosity, undercut, lack of fusion, incomplete penetration, slag inclusion, cracks and excessive spatter.

Porosity is usually caused by contamination, moisture or poor gas shielding. Undercut comes from too much current or the wrong electrode angle. Lack of fusion is often the result of low heat input or fast travel speed.

Most defects can be prevented by cleaning the joint properly, using dry consumables, setting correct parameters from the WPS and keeping a consistent travel speed and angle.',
  (SELECT id FROM categories WHERE slug='welding-quality'),6,TRUE,FALSE,'2026-05-05'),
 ('importance-of-welding-codes-and-standards','Importance of Welding Codes and Standards in Industry',
  'Why welding codes and standards are critical for safety, quality and compliance.',
  'Welding codes such as ASME Section IX, AWS D1.1 and API 1104 define how welding procedures and welders must be qualified, how welds are inspected and what acceptance criteria apply.

Following a code means a weld made in Chennai can be trusted by a client in Dubai or Houston. It protects lives, avoids costly rework and is a requirement on most industrial projects.',
  (SELECT id FROM categories WHERE slug='codes-standards'),4,TRUE,TRUE,'2026-05-03'),
 ('welding-positions-1g-to-6g-explained','Welding Positions 1G, 2G, 3G, 4G, 5G and 6G Explained',
  'What each welding position means and why 6G is the benchmark qualification.',
  '1G is flat, 2G horizontal, 3G vertical and 4G overhead for plate. For pipe, 5G is a fixed horizontal pipe and 6G is a pipe fixed at 45 degrees, which requires welding in every position around the joint. Passing a 6G test usually qualifies a welder for all positions.',
  (SELECT id FROM categories WHERE slug='welding-basics'),6,FALSE,FALSE,'2026-04-28'),
 ('essential-ppe-for-welders','Essential PPE Every Welder Must Wear',
  'Helmets, gloves, jackets, respirators and boots: what to wear and why.',
  'A welder needs an auto-darkening helmet of the correct shade, flame-resistant clothing, leather gloves, safety boots, ear protection and, in confined spaces or with stainless steel, respiratory protection against fumes.',
  (SELECT id FROM categories WHERE slug='safety-ppe'),4,FALSE,FALSE,'2026-04-22'),
 ('how-to-become-a-6g-welder','How to Become a 6G Welder',
  'The training path from beginner to a qualified 6G pipe welder.',
  'Start with ARC and TIG basics on plate, progress through 2G, 3G and 4G, then move to pipe in 5G and 6G. Plan for regular assessment, visual inspection and bend or radiography tests along the way before attempting a formal qualification test.',
  (SELECT id FROM categories WHERE slug='career-industry'),8,FALSE,FALSE,'2026-04-15')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO resources (title,file_type,size_label,file_url,sort_order)
SELECT * FROM (VALUES
 ('Welding Symbols Guide','PDF','2.4 MB','/files/welding-symbols-guide.pdf',1),
 ('Welding Terminology Glossary','DOC','1.8 MB','/files/welding-terminology-glossary.docx',2),
 ('Welding Inspection Checklist','XLS','1.2 MB','/files/welding-inspection-checklist.xlsx',3),
 ('WPS & PQR Explained','PDF','3.1 MB','/files/wps-pqr-explained.pdf',4)
) v WHERE NOT EXISTS (SELECT 1 FROM resources);

INSERT INTO videos (title,description,youtube_id,duration,category_id,published_at)
SELECT v.title, v.description, v.youtube_id, v.duration, v.category_id, v.published_at::timestamptz FROM (VALUES
 ('TIG Welding Basics – Setup and Techniques','Learn the basic setup and techniques for perfect TIG welding.',NULL::varchar,'08:45',(SELECT id FROM categories WHERE slug='videos-tutorials'),'2026-05-09'),
 ('6G Pipe Welding – Tips for Better Performance','Professional tips to improve your 6G pipe welding skills.',NULL,'06:30',(SELECT id FROM categories WHERE slug='videos-tutorials'),'2026-05-06'),
 ('Welding Safety – Best Practices Every Welder Must Follow','Essential safety practices to protect yourself on the job.',NULL,'05:12',(SELECT id FROM categories WHERE slug='videos-tutorials'),'2026-05-02')
) v(title,description,youtube_id,duration,category_id,published_at) WHERE NOT EXISTS (SELECT 1 FROM videos);

INSERT INTO faqs (question,answer,sort_order)
SELECT * FROM (VALUES
 ('What is the difference between TIG and MIG welding?','TIG uses a non-consumable tungsten electrode and a separate filler rod, giving precise, clean welds ideal for stainless steel and root passes. MIG feeds a consumable wire continuously, so it is faster and suited to fabrication and structural work.',1),
 ('What is WPS, PQR and WPQR?','A WPS (Welding Procedure Specification) tells the welder how to make a weld. A PQR (Procedure Qualification Record) proves that procedure produces sound welds. A WPQR (Welder Performance Qualification Record) proves an individual welder can follow it.',2),
 ('What are the types of welding positions?','Plate positions are 1G (flat), 2G (horizontal), 3G (vertical) and 4G (overhead). Pipe positions include 5G (fixed horizontal) and 6G (fixed at 45 degrees), which covers all positions.',3),
 ('What are the common welding defects?','Porosity, undercut, lack of fusion, incomplete penetration, slag inclusion, cracks and excessive spatter are the most common. Most are prevented with clean joints, dry consumables and correct parameters.',4),
 ('How can I become a certified welder?','Complete practical training, build skill in the positions you need, then pass a qualification test witnessed to a code such as ASME IX or AWS D1.1. NIW provides training, pre-assessment and qualification support.',5),
 ('Which welding process is best for beginners?','ARC welding (SMAW) is usually the best starting point. It teaches arc control and puddle reading, and the skills carry over to TIG and MIG.',6)
) v WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE scope = 'knowledge');


-- =========================================================
-- 3. SEED DATA - HOMEPAGE COURSES & SITE STATS
-- =========================================================
INSERT INTO courses (slug,title,short_desc,icon,duration,level,sort_order) VALUES
 ('tig-welding','TIG Welding','Precision welding for thin materials and critical applications.','torch','2 Months','Beginner / Intermediate',1),
 ('mig-welding','MIG/MAG Welding','High productivity welding for industrial and manufacturing sectors.','wire','1.5 Months','Beginner',2),
 ('arc-welding','ARC Welding','Shielded metal arc welding training for strong and reliable joints.','zap','1 Month','Beginner',3),
 ('6g-pipe-welding','6G Pipe Welding','Advance your skills in 6G pipe welding with certification support.','pipe','2 Months','Intermediate',4),
 ('structural-welding','Structural Welding','Welding training for structural steel and heavy fabrication.','beam','1.5 Months','Intermediate',5),
 ('stainless-steel-welding','Stainless Steel','Specialized training for stainless steel and exotic materials.','shield','1.5 Months','Advanced',6)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO site_stats (value,label,sub_label,icon,sort_order)
SELECT * FROM (VALUES
 ('15+','Years','Of Excellence','award',1),
 ('25+','Trainers','Expert Instructors','trainer',2),
 ('5000+','Students','Trained Successfully','students',3),
 ('100+','Companies','Industry Partnerships','factory',4)
) v WHERE NOT EXISTS (SELECT 1 FROM site_stats);



-- =========================================================
-- 4. SEED DATA - DETAILED PAGES & COURSE OVERVIEWS
-- =========================================================
-- GENERATED by database/tools/build_seed_pages.py -- safe to re-run
INSERT INTO courses (slug,title,short_desc,icon,duration,level,show_on_home,sort_order) VALUES
 ('fitter-training','Fitter Training','Pipe and structural fitting: drawings, marking, cutting and fit-up.','ruler','1.5 Months','Beginner',FALSE,7)
ON CONFLICT (slug) DO NOTHING;

UPDATE courses SET
  tagline='Precision Welding Skills for a Better Tomorrow', overview='TIG (Tungsten Inert Gas) welding is a high-precision welding process used for high-quality welds on stainless steel, aluminium and other non-ferrous metals. This course is designed to give you complete practical and theoretical knowledge to become a skilled TIG welder, ready for industrial and international opportunities.',
  learn_points='["TIG welding fundamentals", "TIG machine setup & operation", "Tungsten electrode preparation", "Current and gas flow selection", "Welding on stainless steel", "Welding on aluminium", "Pipe and pipe-to-plate welding", "Welding positions (1G to 6G)", "Weld defect identification & prevention", "Welding symbols (basic)", "Safety and PPE", "Practical tips from industry experts"]'::jsonb,
  modules='[{"title": "Basics & Safety", "points": ["Process introduction", "Tools & equipment", "Safety practices"]}, {"title": "Machine Setup", "points": ["Machine settings", "Tungsten & filler rods", "Gas flow & shielding"]}, {"title": "Practical Welding", "points": ["Flat, horizontal, vertical", "Pipe welding", "Hands-on practice"]}, {"title": "Advanced Techniques", "points": ["Stainless steel & aluminium", "Defect control", "Industry standards"]}, {"title": "Assessment & Certification", "points": ["Theory test", "Practical test", "Certification support"]}]'::jsonb,
  details='[{"label": "Eligibility", "value": "10th Pass / ITI / Diploma / Any interested candidate"}, {"label": "Duration", "value": "See course duration (custom duration available for corporate)"}, {"label": "Training Method", "value": "Theory + Practical (80% Practical)"}, {"label": "Work Material", "value": "Mild Steel, Stainless Steel, Aluminium"}, {"label": "Equipment Used", "value": "Industry standard TIG welding machines and accessories"}, {"label": "Certification", "value": "Course completion certificate (as applicable)"}]'::jsonb,
  careers='["TIG Welder (Industrial / Fabrication)", "Stainless Steel Welder", "Aluminium Welder", "Pipe Welder (TIG)", "Welding Technician", "Welding Supervisor (with experience)", "Opportunities in India, Gulf & Overseas"]'::jsonb,
  faqs='[{"q": "What is the eligibility for the TIG welding course?", "a": "10th pass, ITI, diploma holders or anyone interested in welding can join. No previous welding experience is needed."}, {"q": "Can beginners join this course?", "a": "Yes. The course starts with basics and safety before moving to machine setup and practical welding."}, {"q": "Do you provide practical training?", "a": "Yes. About 80% of the course is hands-on practice in our workshop, with individual practice time on the machines."}, {"q": "Will I get a certificate after the course?", "a": "You receive a course completion certificate after passing the practical and theory assessment. Code-based welder qualification can be arranged separately."}, {"q": "Is accommodation available?", "a": "We can guide outstation students to nearby hostels and shared rooms around Irandamkattalai and Kovur, Chennai. Ask our counsellor for current options and costs."}, {"q": "Do you provide placement assistance?", "a": "Yes. We help with CV preparation, practical test preparation and connecting you with employers in India and the Gulf. Placement depends on your skill level and test results."}, {"q": "How is TIG different from MIG welding?", "a": "TIG uses a non-consumable tungsten electrode and a separate filler rod, giving very clean, precise welds. MIG feeds wire continuously and is faster for fabrication work."}, {"q": "What are the job opportunities after this course?", "a": "TIG welders work in stainless steel fabrication, pharma and food plants, pipelines, power plants and oil & gas, in India and abroad."}]'::jsonb,
  gallery='[{"title": "TIG Welding Practice", "image_url": null}, {"title": "Stainless Steel Welding", "image_url": null}, {"title": "Pipe Welding Setup", "image_url": null}, {"title": "Student Practice", "image_url": null}, {"title": "Trainer Guidance", "image_url": null}]'::jsonb
WHERE slug='tig-welding' AND overview IS NULL;

UPDATE courses SET
  tagline='Fast, Productive Welding for Modern Fabrication', overview='MIG/MAG (Gas Metal Arc) welding feeds a continuous wire through the torch, making it the fastest and most productive process for fabrication, manufacturing and structural work. This course builds the machine control and consistency employers look for on production lines and fabrication shops.',
  learn_points='["MIG/MAG process fundamentals", "Wire feeder and machine setup", "Voltage, wire speed and gas selection", "Short-circuit and spray transfer", "Fillet and butt welds on plate", "Welding positions (1G to 4G)", "Flux-cored wire basics", "Weld defect identification & prevention", "Joint preparation and fit-up", "Welding symbols (basic)", "Safety and PPE", "Production welding tips"]'::jsonb,
  modules='[{"title": "Basics & Safety", "points": ["Process introduction", "Wire and gas types", "Safety practices"]}, {"title": "Machine Setup", "points": ["Voltage and wire speed", "Gas flow", "Torch maintenance"]}, {"title": "Practical Welding", "points": ["Fillet welds", "Butt welds", "Position practice"]}, {"title": "Advanced Techniques", "points": ["Spray transfer", "Flux-cored welding", "Defect control"]}, {"title": "Assessment & Certification", "points": ["Theory test", "Practical test", "Certification support"]}]'::jsonb,
  details='[{"label": "Eligibility", "value": "10th Pass / ITI / Diploma / Any interested candidate"}, {"label": "Duration", "value": "See course duration (custom duration available for corporate)"}, {"label": "Training Method", "value": "Theory + Practical (80% Practical)"}, {"label": "Work Material", "value": "Mild Steel, Carbon Steel"}, {"label": "Equipment Used", "value": "Industrial MIG/MAG machines with wire feeders"}, {"label": "Certification", "value": "Course completion certificate (as applicable)"}]'::jsonb,
  careers='["MIG/MAG Welder", "Fabrication Welder", "Production Line Welder", "Structural Welder", "Welding Technician", "Opportunities in India, Gulf & Overseas"]'::jsonb,
  faqs='[{"q": "What is the eligibility for the MIG welding course?", "a": "10th pass, ITI, diploma holders or anyone interested can join. No experience needed."}, {"q": "Is MIG welding easy for beginners?", "a": "MIG is one of the easier processes to start with because the wire feeds automatically, letting you focus on travel speed and angle."}, {"q": "Do you provide practical training?", "a": "Yes. Most of the course is hands-on workshop practice."}, {"q": "Will I get a certificate after the course?", "a": "Yes, a course completion certificate after passing the assessment."}, {"q": "Is accommodation available?", "a": "We can guide outstation students to nearby hostels and shared rooms around Irandamkattalai and Kovur, Chennai. Ask our counsellor for current options and costs."}, {"q": "Do you provide placement assistance?", "a": "Yes. We help with CV preparation, practical test preparation and connecting you with employers in India and the Gulf. Placement depends on your skill level and test results."}, {"q": "What is the difference between MIG and MAG?", "a": "Both use the same equipment. MIG uses an inert gas like argon; MAG uses an active gas mix with CO₂, which is common for steel."}, {"q": "Where do MIG welders work?", "a": "Automotive plants, fabrication shops, structural steel, shipbuilding and heavy engineering."}]'::jsonb,
  gallery='[{"title": "MIG Welding Practice", "image_url": null}, {"title": "Fillet Weld Training", "image_url": null}, {"title": "Fabrication Work", "image_url": null}, {"title": "Student Practice", "image_url": null}, {"title": "Trainer Guidance", "image_url": null}]'::jsonb
WHERE slug='mig-welding' AND overview IS NULL;

UPDATE courses SET
  tagline='The Foundation Every Welder Needs', overview='ARC (Shielded Metal Arc / SMAW) welding is the most widely used welding process on construction sites, pipelines and repair work. It is the best starting point for new welders, teaching arc control, puddle reading and electrode handling that carry over to every other process.',
  learn_points='["ARC welding fundamentals", "Machine setup and polarity", "Electrode types and selection", "Striking and maintaining the arc", "Stringer and weave beads", "Fillet and butt joints", "Welding positions (1G to 4G)", "Weld defect identification & prevention", "Electrode storage and baking", "Welding symbols (basic)", "Safety and PPE", "Site welding practices"]'::jsonb,
  modules='[{"title": "Basics & Safety", "points": ["Process introduction", "Electrodes", "Safety practices"]}, {"title": "Machine Setup", "points": ["Current settings", "Polarity", "Electrode handling"]}, {"title": "Practical Welding", "points": ["Bead practice", "Fillet and butt joints", "Position practice"]}, {"title": "Advanced Techniques", "points": ["Vertical and overhead", "Defect control", "Pipe introduction"]}, {"title": "Assessment & Certification", "points": ["Theory test", "Practical test", "Certification support"]}]'::jsonb,
  details='[{"label": "Eligibility", "value": "8th / 10th Pass / ITI / Any interested candidate"}, {"label": "Duration", "value": "See course duration (custom duration available for corporate)"}, {"label": "Training Method", "value": "Theory + Practical (80% Practical)"}, {"label": "Work Material", "value": "Mild Steel, Carbon Steel"}, {"label": "Equipment Used", "value": "Industrial SMAW machines, electrode ovens"}, {"label": "Certification", "value": "Course completion certificate (as applicable)"}]'::jsonb,
  careers='["ARC Welder", "Construction Site Welder", "Maintenance Welder", "Pipeline Helper / Welder", "Fabricator", "Opportunities in India, Gulf & Overseas"]'::jsonb,
  faqs='[{"q": "What is the eligibility for the ARC welding course?", "a": "Anyone interested can join. The course starts from the basics."}, {"q": "Is ARC welding good for beginners?", "a": "Yes. It is usually the first process we teach because the skills carry over to TIG and MIG."}, {"q": "Do you provide practical training?", "a": "Yes. Most of the course is hands-on workshop practice."}, {"q": "Will I get a certificate after the course?", "a": "Yes, a course completion certificate after passing the assessment."}, {"q": "Is accommodation available?", "a": "We can guide outstation students to nearby hostels and shared rooms around Irandamkattalai and Kovur, Chennai. Ask our counsellor for current options and costs."}, {"q": "Do you provide placement assistance?", "a": "Yes. We help with CV preparation, practical test preparation and connecting you with employers in India and the Gulf. Placement depends on your skill level and test results."}, {"q": "What should I learn after ARC welding?", "a": "Most students continue to TIG welding and then 3G/6G position welding for better job opportunities."}, {"q": "Where do ARC welders work?", "a": "Construction, structural steel, pipelines, shipyards and plant maintenance."}]'::jsonb,
  gallery='[{"title": "ARC Welding Practice", "image_url": null}, {"title": "Electrode Handling", "image_url": null}, {"title": "Position Welding", "image_url": null}, {"title": "Student Practice", "image_url": null}, {"title": "Trainer Guidance", "image_url": null}]'::jsonb
WHERE slug='arc-welding' AND overview IS NULL;

UPDATE courses SET
  tagline='The Benchmark Qualification for Pipe Welders', overview='6G is the most demanding welding position: the pipe is fixed at 45° and you must weld all the way around it, covering flat, vertical and overhead in one joint. Passing a 6G test usually qualifies a welder for all positions, which is why oil & gas, power and Gulf employers ask for it.',
  learn_points='["Pipe joint preparation and bevelling", "Fit-up and tack welding", "TIG root pass technique", "ARC fill and cap passes", "5G and 6G positions", "Heat input control", "Reading a WPS", "Visual inspection criteria", "Common pipe weld defects", "Radiography test basics", "Safety and PPE", "Qualification test preparation"]'::jsonb,
  modules='[{"title": "Pipe Basics & Safety", "points": ["Pipe materials", "Bevel preparation", "Safety practices"]}, {"title": "Fit-up & Root", "points": ["Tack welding", "TIG root pass", "Root inspection"]}, {"title": "Fill & Cap", "points": ["Hot pass", "ARC fill passes", "Cap pass"]}, {"title": "6G Position Practice", "points": ["5G practice", "6G practice", "Defect control"]}, {"title": "Assessment & Qualification", "points": ["Mock test", "Visual/bend test", "Qualification support"]}]'::jsonb,
  details='[{"label": "Eligibility", "value": "Basic ARC or TIG welding skills recommended"}, {"label": "Duration", "value": "2 – 3 Months (depends on prior skill)"}, {"label": "Training Method", "value": "Theory + Practical (80% Practical)"}, {"label": "Work Material", "value": "Carbon Steel pipe, Stainless Steel pipe"}, {"label": "Equipment Used", "value": "TIG and SMAW machines, 6G pipe rigs, bevelling tools"}, {"label": "Certification", "value": "Course completion certificate (as applicable)"}]'::jsonb,
  careers='["6G Pipe Welder", "Pipeline Welder", "Oil & Gas Welder", "Power Plant Welder", "Pressure Vessel Welder", "Welding Supervisor (with experience)", "Opportunities in India, Gulf & Overseas"]'::jsonb,
  faqs='[{"q": "Can a beginner join the 6G course?", "a": "We recommend basic ARC or TIG skills first. Beginners can take a combined path starting with ARC and TIG basics."}, {"q": "How long does it take to pass 6G?", "a": "Most students with basic skills need 2 to 3 months of regular practice. It depends on your practice time and consistency."}, {"q": "Do you provide practical training?", "a": "Yes. You practise on fixed pipe rigs in 5G and 6G positions."}, {"q": "Will I get a certificate?", "a": "You receive a course completion certificate. Code-based welder qualification (e.g. ASME IX) can be arranged as a separate test."}, {"q": "Is accommodation available?", "a": "We can guide outstation students to nearby hostels and shared rooms around Irandamkattalai and Kovur, Chennai. Ask our counsellor for current options and costs."}, {"q": "Do you provide placement assistance?", "a": "Yes. We help with CV preparation, practical test preparation and connecting you with employers in India and the Gulf. Placement depends on your skill level and test results."}, {"q": "Which process is used in 6G tests?", "a": "Commonly a TIG root with ARC fill and cap, but it depends on the employer''s WPS."}, {"q": "Why is 6G in demand in the Gulf?", "a": "Oil & gas, petrochemical and power projects need welders qualified for all positions on pipe."}]'::jsonb,
  gallery='[{"title": "6G Pipe Setup", "image_url": null}, {"title": "Root Pass Practice", "image_url": null}, {"title": "Pipe Fit-up", "image_url": null}, {"title": "Student Practice", "image_url": null}, {"title": "Trainer Guidance", "image_url": null}]'::jsonb
WHERE slug='6g-pipe-welding' AND overview IS NULL;

UPDATE courses SET
  tagline='Welding Skills for Steel Structures and Heavy Fabrication', overview='Structural welding covers the beams, columns, plates and frames used in buildings, bridges, sheds and heavy fabrication. This course focuses on strong fillet and groove welds, fit-up and reading drawings, following structural codes such as AWS D1.1.',
  learn_points='["Structural steel basics", "Reading fabrication drawings", "Joint fit-up and tacking", "Fillet and groove welds", "Multi-pass welding", "Welding positions (1G to 4G)", "Distortion control", "Weld defect identification & prevention", "Introduction to AWS D1.1", "Welding symbols", "Safety at height and on site", "Fabrication shop practices"]'::jsonb,
  modules='[{"title": "Basics & Safety", "points": ["Structural steel", "Drawings", "Safety practices"]}, {"title": "Fit-up", "points": ["Measuring and marking", "Tack welding", "Distortion control"]}, {"title": "Practical Welding", "points": ["Fillet welds", "Groove welds", "Multi-pass"]}, {"title": "Position Welding", "points": ["3G vertical", "4G overhead", "Defect control"]}, {"title": "Assessment & Certification", "points": ["Theory test", "Practical test", "Certification support"]}]'::jsonb,
  details='[{"label": "Eligibility", "value": "10th Pass / ITI / Basic welding knowledge helpful"}, {"label": "Duration", "value": "See course duration (custom duration available for corporate)"}, {"label": "Training Method", "value": "Theory + Practical (80% Practical)"}, {"label": "Work Material", "value": "Mild Steel plates, sections and beams"}, {"label": "Equipment Used", "value": "SMAW and MIG/MAG machines, fabrication tools"}, {"label": "Certification", "value": "Course completion certificate (as applicable)"}]'::jsonb,
  careers='["Structural Welder", "Fabrication Welder", "Steel Erection Welder", "Fitter-Welder", "Welding Supervisor (with experience)", "Opportunities in India, Gulf & Overseas"]'::jsonb,
  faqs='[{"q": "What is the eligibility for structural welding?", "a": "10th pass or ITI candidates can join. Basic welding knowledge helps but is not required."}, {"q": "Which processes are used?", "a": "Mainly ARC (SMAW) and MIG/MAG, the processes used in structural fabrication."}, {"q": "Do you provide practical training?", "a": "Yes, on plates and sections in all main positions."}, {"q": "Will I get a certificate?", "a": "Yes, a course completion certificate after passing the assessment."}, {"q": "Is accommodation available?", "a": "We can guide outstation students to nearby hostels and shared rooms around Irandamkattalai and Kovur, Chennai. Ask our counsellor for current options and costs."}, {"q": "Do you provide placement assistance?", "a": "Yes. We help with CV preparation, practical test preparation and connecting you with employers in India and the Gulf. Placement depends on your skill level and test results."}, {"q": "What is 3G and 4G?", "a": "3G is vertical and 4G is overhead welding on plate. They are the positions most asked for in structural tests."}, {"q": "Where do structural welders work?", "a": "Construction, bridges, industrial sheds, shipyards and heavy engineering companies."}]'::jsonb,
  gallery='[{"title": "Structural Welding", "image_url": null}, {"title": "Beam Fabrication", "image_url": null}, {"title": "Fit-up Practice", "image_url": null}, {"title": "Student Practice", "image_url": null}, {"title": "Trainer Guidance", "image_url": null}]'::jsonb
WHERE slug='structural-welding' AND overview IS NULL;

UPDATE courses SET
  tagline='Clean, Corrosion-Resistant Welds for Critical Industries', overview='Stainless steel is used in pharma, food, chemical and oil & gas plants where weld quality and cleanliness matter. This course teaches the heat control, purging and contamination prevention needed to make sound stainless steel welds, mainly with TIG.',
  learn_points='["Stainless steel grades and properties", "TIG setup for stainless steel", "Back purging", "Heat input and distortion control", "Contamination prevention", "Plate and pipe welding", "Welding positions", "Weld colour and quality", "Weld defect identification & prevention", "Cleaning and passivation basics", "Safety and fume control", "Industry quality standards"]'::jsonb,
  modules='[{"title": "Material & Safety", "points": ["Stainless grades", "Fume safety", "Tools"]}, {"title": "TIG Setup", "points": ["Machine settings", "Filler selection", "Gas and purge"]}, {"title": "Practical Welding", "points": ["Plate welding", "Pipe welding", "Heat control"]}, {"title": "Advanced Techniques", "points": ["Thin sheet", "Purging", "Defect control"]}, {"title": "Assessment & Certification", "points": ["Theory test", "Practical test", "Certification support"]}]'::jsonb,
  details='[{"label": "Eligibility", "value": "Basic TIG welding knowledge recommended"}, {"label": "Duration", "value": "See course duration (custom duration available for corporate)"}, {"label": "Training Method", "value": "Theory + Practical (80% Practical)"}, {"label": "Work Material", "value": "Stainless Steel (304, 316), Duplex introduction"}, {"label": "Equipment Used", "value": "TIG machines, purge equipment, stainless tooling"}, {"label": "Certification", "value": "Course completion certificate (as applicable)"}]'::jsonb,
  careers='["Stainless Steel Welder", "Pharma / Food Plant Welder", "Piping Welder", "TIG Welder", "Welding Supervisor (with experience)", "Opportunities in India, Gulf & Overseas"]'::jsonb,
  faqs='[{"q": "Do I need TIG experience?", "a": "Basic TIG knowledge is recommended. Beginners can start with our TIG course first."}, {"q": "Why is stainless steel welding different?", "a": "Stainless is sensitive to heat and contamination, so it needs careful heat control and gas shielding, including back purging on pipe."}, {"q": "Do you provide practical training?", "a": "Yes, on stainless plate and pipe."}, {"q": "Will I get a certificate?", "a": "Yes, a course completion certificate after passing the assessment."}, {"q": "Is accommodation available?", "a": "We can guide outstation students to nearby hostels and shared rooms around Irandamkattalai and Kovur, Chennai. Ask our counsellor for current options and costs."}, {"q": "Do you provide placement assistance?", "a": "Yes. We help with CV preparation, practical test preparation and connecting you with employers in India and the Gulf. Placement depends on your skill level and test results."}, {"q": "What is back purging?", "a": "Filling the inside of a pipe with argon so the root of the weld does not oxidise."}, {"q": "Which industries hire stainless welders?", "a": "Pharma, food processing, chemical, dairy, oil & gas and power plants."}]'::jsonb,
  gallery='[{"title": "Stainless Steel Welding", "image_url": null}, {"title": "Purging Setup", "image_url": null}, {"title": "Pipe Welding", "image_url": null}, {"title": "Student Practice", "image_url": null}, {"title": "Trainer Guidance", "image_url": null}]'::jsonb
WHERE slug='stainless-steel-welding' AND overview IS NULL;

UPDATE courses SET
  tagline='Measure, Mark, Cut and Fit Like a Professional', overview='Fitters prepare and assemble components before welding: reading drawings, marking, cutting, bevelling and fitting pipes and structures. Good fitters are always in demand because accurate fit-up is what makes quality welds possible.',
  learn_points='["Reading isometric and fabrication drawings", "Measuring and marking", "Gas cutting and grinding", "Pipe bevelling", "Pipe and flange fit-up", "Structural fit-up", "Tack welding basics", "Using levels, squares and gauges", "Tolerances and quality checks", "Material handling", "Safety and PPE", "Site fitting practices"]'::jsonb,
  modules='[{"title": "Basics & Safety", "points": ["Tools", "Materials", "Safety practices"]}, {"title": "Drawings", "points": ["Isometrics", "Fabrication drawings", "Bill of materials"]}, {"title": "Cutting & Preparation", "points": ["Gas cutting", "Grinding", "Bevelling"]}, {"title": "Fit-up Practice", "points": ["Pipe fit-up", "Structural fit-up", "Tack welding"]}, {"title": "Assessment & Certification", "points": ["Theory test", "Practical test", "Certification support"]}]'::jsonb,
  details='[{"label": "Eligibility", "value": "10th Pass / ITI Fitter / Any interested candidate"}, {"label": "Duration", "value": "See course duration (custom duration available for corporate)"}, {"label": "Training Method", "value": "Theory + Practical (80% Practical)"}, {"label": "Work Material", "value": "Carbon Steel pipes, plates and sections"}, {"label": "Equipment Used", "value": "Gas cutting sets, grinders, measuring tools"}, {"label": "Certification", "value": "Course completion certificate (as applicable)"}]'::jsonb,
  careers='["Pipe Fitter", "Structural Fitter", "Fabrication Fitter", "Fitter-Welder", "Opportunities in India, Gulf & Overseas"]'::jsonb,
  faqs='[{"q": "Who can join fitter training?", "a": "10th pass, ITI fitter or anyone interested in fabrication."}, {"q": "Is welding included?", "a": "Tack welding basics are included. Full welding skills are covered in our welding courses."}, {"q": "Do you provide practical training?", "a": "Yes, on pipes and structures."}, {"q": "Will I get a certificate?", "a": "Yes, a course completion certificate after passing the assessment."}, {"q": "Is accommodation available?", "a": "We can guide outstation students to nearby hostels and shared rooms around Irandamkattalai and Kovur, Chennai. Ask our counsellor for current options and costs."}, {"q": "Do you provide placement assistance?", "a": "Yes. We help with CV preparation, practical test preparation and connecting you with employers in India and the Gulf. Placement depends on your skill level and test results."}, {"q": "Can I combine fitter and welder training?", "a": "Yes. A combined fitter-welder path is popular for Gulf jobs."}, {"q": "Where do pipe fitters work?", "a": "Oil & gas, petrochemical, power plants, shipyards and construction projects."}]'::jsonb,
  gallery='[{"title": "Pipe Fit-up", "image_url": null}, {"title": "Drawing Reading", "image_url": null}, {"title": "Gas Cutting", "image_url": null}, {"title": "Student Practice", "image_url": null}, {"title": "Trainer Guidance", "image_url": null}]'::jsonb
WHERE slug='fitter-training' AND overview IS NULL;

UPDATE courses SET intro='Learn TIG welding with hands-on training on industry-standard machines. Build the precision, control and confidence to weld stainless steel, aluminium and pipe to industrial quality.', industries='["oil-gas", "petrochemical", "power", "heavy-engineering", "construction", "fabrication", "shipbuilding", "automotive", "manufacturing", "food-pharma"]'::jsonb, related_slugs='["mig-welding", "6g-pipe-welding", "stainless-steel-welding"]'::jsonb WHERE slug='tig-welding' AND intro IS NULL;
UPDATE courses SET intro='Learn MIG/MAG welding the way production shops use it. Master machine setup, wire and gas selection and consistent, fast welds for fabrication and manufacturing jobs.', industries='["automotive", "manufacturing", "fabrication", "construction", "shipbuilding", "heavy-engineering", "power", "infrastructure"]'::jsonb, related_slugs='["arc-welding", "structural-welding", "tig-welding"]'::jsonb WHERE slug='mig-welding' AND intro IS NULL;
UPDATE courses SET intro='Start your welding career with ARC (SMAW) welding. Learn arc control, electrode handling and strong, reliable joints that every construction site and fabrication shop needs.', industries='["construction", "infrastructure", "fabrication", "shipbuilding", "power", "oil-gas", "heavy-engineering", "maintenance"]'::jsonb, related_slugs='["tig-welding", "structural-welding", "6g-pipe-welding"]'::jsonb WHERE slug='arc-welding' AND intro IS NULL;
UPDATE courses SET intro='Train for the all-position pipe test employers ask for. Practise TIG root and ARC fill and cap passes on fixed 45° pipe until you are ready for your qualification test.', industries='["oil-gas", "petrochemical", "power", "offshore", "shipbuilding", "heavy-engineering", "construction", "fabrication"]'::jsonb, related_slugs='["tig-welding", "arc-welding", "stainless-steel-welding"]'::jsonb WHERE slug='6g-pipe-welding' AND intro IS NULL;
UPDATE courses SET intro='Learn to weld beams, columns and plates for buildings, bridges and heavy fabrication. Build strong fillet and groove welds in vertical and overhead positions.', industries='["construction", "infrastructure", "fabrication", "heavy-engineering", "shipbuilding", "power", "manufacturing", "oil-gas"]'::jsonb, related_slugs='["arc-welding", "mig-welding", "fitter-training"]'::jsonb WHERE slug='structural-welding' AND intro IS NULL;
UPDATE courses SET intro='Specialise in clean, corrosion-resistant stainless steel welds. Learn heat control, back purging and contamination prevention for pharma, food, chemical and oil & gas plants.', industries='["food-pharma", "petrochemical", "oil-gas", "power", "dairy", "fabrication", "heavy-engineering", "manufacturing"]'::jsonb, related_slugs='["tig-welding", "6g-pipe-welding", "mig-welding"]'::jsonb WHERE slug='stainless-steel-welding' AND intro IS NULL;
UPDATE courses SET intro='Learn to read drawings, measure, mark, cut, bevel and fit pipes and structures accurately. Good fit-up is what makes quality welds possible, and skilled fitters are always in demand.', industries='["oil-gas", "petrochemical", "power", "shipbuilding", "construction", "infrastructure", "fabrication", "heavy-engineering"]'::jsonb, related_slugs='["structural-welding", "6g-pipe-welding", "arc-welding"]'::jsonb WHERE slug='fitter-training' AND intro IS NULL;
UPDATE courses SET duration = '2 – 3 Months' WHERE slug = '6g-pipe-welding' AND duration = '2 Months';

UPDATE courses SET details = jsonb_set(details, '{1,value}', to_jsonb(duration || ' (custom duration available for corporate)')) WHERE details->1->>'value' LIKE 'See course duration%';

-- Facilities (replaces the 4 sample rows from v2)
-- On first upgrade only: clear the old sample rows
DELETE FROM facilities WHERE NOT EXISTS (SELECT 1 FROM facilities WHERE title = 'Welding Workshop');
INSERT INTO facilities (title, caption, sort_order)
SELECT * FROM (VALUES
 ('Welding Workshop','Individual booths so every student gets real arc time',1),
 ('Classroom','Theory, welding symbols and WPS reading',2),
 ('Modern Equipment','Industrial TIG, MIG and ARC machines',3),
 ('6G Pipe Setup','Fixed-position pipe rigs for 5G and 6G practice',4),
 ('Testing & Inspection','Visual inspection, bend tests and NDT demonstrations',5)
) v WHERE NOT EXISTS (SELECT 1 FROM facilities WHERE title = 'Welding Workshop');

-- SAMPLE testimonials from the design mockup. Replace with genuine student reviews before going live.
INSERT INTO testimonials (name, course, quote, rating, sort_order)
SELECT * FROM (VALUES
 ('K. Prakash','TIG Welding Course','Excellent practical training with individual attention. Now I am working in Dubai as a TIG welder.',5,1),
 ('M. Aravind','6G Pipe Welding Course','Best institute for 6G pipe welding training. Supportive trainers and a great workshop.',5,2),
 ('S. Hari','Welding Supervisor Course','NIW helped me build my career. Now I am working as a welding supervisor in India.',5,3),
 ('R. Karthik','MIG Welding Course','Good facilities, real-time practice and placement support is awesome.',5,4)
) v WHERE NOT EXISTS (SELECT 1 FROM testimonials);

-- SAMPLE employer names from the design mockup. List only companies that have actually hired NIW students.
INSERT INTO recruiters (name, sort_order) VALUES
 ('Larsen & Toubro',1),('Tata',2),('Reliance Industries',3),('Adani',4),
 ('Shapoorji Pallonji',5),('TechnipFMC',6),('BHEL',7),('NPCC',8)
ON CONFLICT (name) DO NOTHING;

-- Homepage FAQs
INSERT INTO faqs (question, answer, sort_order, scope)
SELECT * FROM (VALUES
 ('What is the eligibility for welding courses?','Most courses are open to 10th pass, ITI and diploma candidates, and to anyone interested in welding. Advanced courses like 6G need basic welding skills.',1,'home'),
 ('Do you provide practical training?','Yes. About 80% of training time is hands-on practice in our workshop, with individual time on industrial machines.',2,'home'),
 ('Do you provide certification after course completion?','Yes. You receive a course completion certificate after passing the assessment. Code-based welder qualification can be arranged separately.',3,'home'),
 ('Is accommodation available?','We guide outstation students to nearby hostels and shared rooms around Irandamkattalai and Kovur, Chennai. Ask our counsellor for current options.',4,'home'),
 ('Do you provide placement assistance?','Yes. We help with CV preparation, practical test preparation and connecting students with employers in India and the Gulf.',5,'home'),
 ('How can I join the course?','Send an enquiry, call or WhatsApp us. We will explain the course, fees and next batch date, and you can visit the institute before joining.',6,'home')
) v WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE scope = 'home');

