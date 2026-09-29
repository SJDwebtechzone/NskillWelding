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
