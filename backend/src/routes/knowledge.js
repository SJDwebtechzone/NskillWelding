import { Router } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { query } from '../db.js';

const router = Router();
const FILES_DIR = path.resolve('public/files');

const ARTICLE_FIELDS = `
  a.id, a.slug, a.title, a.excerpt, a.image_url, a.read_minutes,
  a.has_video, a.published_at, c.slug AS category_slug, c.name AS category_name`;

// Wraps async handlers so errors reach the error middleware
const h = (fn) => (req, res, next) => fn(req, res, next).catch(next);

async function getCategories() {
  const { rows } = await query(`
    SELECT c.id, c.slug, c.name, c.icon, c.count_type,
      CASE WHEN c.count_type = 'videos'
        THEN (SELECT COUNT(*) FROM videos v WHERE v.category_id = c.id)
        ELSE (SELECT COUNT(*) FROM articles a WHERE a.category_id = c.id)
      END::int AS item_count
    FROM categories c ORDER BY c.sort_order`);
  return rows;
}

async function getArticles({ category, search, featured, limit = 12 }) {
  const where = [];
  const params = [];
  if (category) { params.push(category); where.push(`c.slug = $${params.length}`); }
  if (featured) where.push('a.is_featured = TRUE');
  if (search) {
    params.push(`%${search}%`);
    where.push(`(a.title ILIKE $${params.length} OR a.excerpt ILIKE $${params.length})`);
  }
  params.push(Math.min(Number(limit) || 12, 50));
  const { rows } = await query(`
    SELECT ${ARTICLE_FIELDS}
    FROM articles a LEFT JOIN categories c ON c.id = a.category_id
    ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
    ORDER BY a.published_at DESC LIMIT $${params.length}`, params);
  return rows;
}

const getResources = async () =>
  (await query('SELECT id, title, file_type, size_label FROM resources ORDER BY sort_order')).rows;

const getVideos = async (limit = 3) =>
  (await query(`SELECT id, title, description, youtube_id, thumbnail_url, duration, published_at
                FROM videos ORDER BY published_at DESC LIMIT $1`, [limit])).rows;

const getFaqs = async () =>
  (await query("SELECT id, question, answer FROM faqs WHERE is_featured AND scope = 'knowledge' ORDER BY sort_order")).rows;

// Everything the Knowledge Center page needs, in one round trip
router.get('/knowledge', h(async (_req, res) => {
  const [categories, featured, resources, videos, faqs] = await Promise.all([
    getCategories(), getArticles({ featured: true, limit: 4 }), getResources(), getVideos(3), getFaqs(),
  ]);
  res.json({ categories, featured, resources, videos, faqs });
}));

router.get('/categories', h(async (_req, res) => res.json(await getCategories())));

router.get('/articles', h(async (req, res) => {
  const { category, search, featured, limit } = req.query;
  res.json(await getArticles({ category, search, featured: featured === 'true', limit }));
}));

router.get('/articles/:slug', h(async (req, res) => {
  const { rows } = await query(`
    SELECT ${ARTICLE_FIELDS}, a.content
    FROM articles a LEFT JOIN categories c ON c.id = a.category_id
    WHERE a.slug = $1`, [req.params.slug]);
  if (!rows.length) return res.status(404).json({ error: 'Article not found' });
  res.json(rows[0]);
}));

router.get('/resources', h(async (_req, res) => res.json(await getResources())));
router.get('/videos', h(async (req, res) => res.json(await getVideos(Math.min(Number(req.query.limit) || 12, 50)))));
router.get('/faqs', h(async (_req, res) => res.json(await getFaqs())));

// Counts the download, then sends the file (local) or redirects (external URL)
router.get('/resources/:id/download', h(async (req, res) => {
  const { rows } = await query(
    'UPDATE resources SET download_count = download_count + 1 WHERE id = $1 RETURNING title, file_url',
    [Number(req.params.id)]);
  if (!rows.length) return res.status(404).json({ error: 'Resource not found' });
  const { file_url } = rows[0];
  if (/^https?:\/\//.test(file_url)) return res.redirect(file_url);
  const filePath = path.join(FILES_DIR, path.basename(file_url));
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: `File not uploaded yet. Add it to backend/public/files/${path.basename(file_url)}` });
  }
  res.download(filePath);
}));

// Search across articles, videos and resources
router.get('/search', h(async (req, res) => {
  const q = String(req.query.q || '').trim();
  if (q.length < 2) return res.json({ articles: [], videos: [], resources: [] });
  const like = `%${q}%`;
  const [articles, videos, resources] = await Promise.all([
    getArticles({ search: q, limit: 6 }),
    query('SELECT id, title, duration, youtube_id FROM videos WHERE title ILIKE $1 OR description ILIKE $1 LIMIT 4', [like]),
    query('SELECT id, title, file_type FROM resources WHERE title ILIKE $1 LIMIT 4', [like]),
  ]);
  res.json({ articles, videos: videos.rows, resources: resources.rows });
}));

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
router.post('/newsletter', h(async (req, res) => {
  const email = String(req.body?.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 255) {
    return res.status(400).json({ error: 'Enter a valid email address, like name@example.com.' });
  }
  const { rowCount } = await query(
    'INSERT INTO newsletter_subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING', [email]);
  res.status(rowCount ? 201 : 200).json({
    message: rowCount ? 'Subscribed. New articles will arrive in your inbox.' : 'This email is already subscribed.',
  });
}));

export default router;
