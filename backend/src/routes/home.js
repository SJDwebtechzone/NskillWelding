import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { query } from '../db.js';

const router = Router();
const h = (fn) => (req, res, next) => fn(req, res, next).catch(next);

const CARD_FIELDS = 'slug, title, short_desc, icon, image_url, duration, level';

const getStats = async () =>
  (await query('SELECT value, label, sub_label, icon FROM site_stats ORDER BY sort_order')).rows;
const getFacilities = async () =>
  (await query('SELECT id, title, caption, image_url FROM facilities ORDER BY sort_order')).rows;

// Homepage: everything in one call
router.get('/home', h(async (_req, res) => {
  const [courses, stats, facilities, testimonials, recruiters, faqs, options] = await Promise.all([
    query(`SELECT ${CARD_FIELDS} FROM courses WHERE show_on_home ORDER BY sort_order LIMIT 6`),
    getStats(),
    getFacilities(),
    query('SELECT id, name, course, quote, rating, photo_url FROM testimonials WHERE is_published ORDER BY sort_order'),
    query('SELECT id, name, logo_url FROM recruiters ORDER BY sort_order'),
    query("SELECT id, question, answer FROM faqs WHERE scope = 'home' ORDER BY sort_order"),
    query('SELECT title FROM courses ORDER BY sort_order'),
  ]);
  res.json({
    courses: courses.rows, stats, facilities,
    testimonials: testimonials.rows, recruiters: recruiters.rows, faqs: faqs.rows,
    courseOptions: options.rows.map((r) => r.title),
  });
}));

// Welding Training page
router.get('/training', h(async (_req, res) => {
  const [courses, stats, facilities] = await Promise.all([
    query(`SELECT ${CARD_FIELDS} FROM courses ORDER BY sort_order`), getStats(), getFacilities(),
  ]);
  res.json({ courses: courses.rows, stats, facilities });
}));

router.get('/courses', h(async (_req, res) => {
  res.json((await query(`SELECT ${CARD_FIELDS} FROM courses ORDER BY sort_order`)).rows);
}));

// Course detail + 3 related courses + options for the enquiry form
router.get('/courses/:slug', h(async (req, res) => {
  const { rows } = await query('SELECT * FROM courses WHERE slug = $1', [req.params.slug]);
  if (!rows.length) return res.status(404).json({ error: 'Course not found' });
  const course = rows[0];
  const picked = Array.isArray(course.related_slugs) ? course.related_slugs.slice(0, 3) : [];
  const [related, options] = await Promise.all([
    picked.length
      // Chosen related courses, kept in the chosen order
      ? query(`SELECT ${CARD_FIELDS} FROM courses WHERE slug = ANY($1::text[]) ORDER BY array_position($1::text[], slug::text)`, [picked])
      : query(`SELECT ${CARD_FIELDS} FROM courses WHERE slug <> $1 ORDER BY show_on_home DESC, sort_order LIMIT 3`, [req.params.slug]),
    query('SELECT title FROM courses ORDER BY sort_order'),
  ]);
  res.json({ ...course, related: related.rows, courseOptions: options.rows.map((r) => r.title) });
}));

// Enquiry form (homepage + course pages)
const PHONE_RE = /^\+?[0-9\s-]{10,15}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clip = (v, n) => (v == null ? null : String(v).trim().slice(0, n) || null);

router.post('/enquiries', rateLimit({ windowMs: 15 * 60 * 1000, limit: 8 }), h(async (req, res) => {
  const b = req.body || {};
  const full_name = clip(b.full_name, 120);
  const whatsapp = clip(b.whatsapp, 20);
  const email = clip(b.email, 255)?.toLowerCase() ?? null;
  const errors = {};
  if (!full_name || full_name.length < 2) errors.full_name = 'Enter your full name.';
  if (!whatsapp || !PHONE_RE.test(whatsapp)) errors.whatsapp = 'Enter a 10-digit WhatsApp number, e.g. 98765 43210.';
  if (email && !EMAIL_RE.test(email)) errors.email = 'Enter a valid email, like name@example.com.';
  if (Object.keys(errors).length) return res.status(400).json({ error: 'Check the highlighted fields.', fields: errors });

  await query(
    `INSERT INTO enquiries (full_name, whatsapp, email, interest, experience, message, source_page)
     VALUES ($1,$2,$3,$4,$5,$6,$7)`,
    [full_name, whatsapp, email, clip(b.interest, 120), clip(b.experience, 60), clip(b.message, 2000), clip(b.source_page, 200)]);
  res.status(201).json({ message: 'Enquiry sent. Our counsellor will contact you on WhatsApp within one working day.' });
}));

export default router;
