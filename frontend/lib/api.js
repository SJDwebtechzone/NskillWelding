import { fallback, homeFallback, trainingFallback, courseFallback } from './fallback';

const API_URL = process.env.API_URL || 'http://localhost:5000';

async function get(path, { revalidate = 60 } = {}) {
  const res = await fetch(`${API_URL}/api${path}`, { next: { revalidate } });
  if (!res.ok) {
    const err = new Error(`API ${res.status} on ${path}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

export async function getKnowledgePage() {
  try { return await get('/knowledge'); }
  catch (e) { console.warn('[knowledge] API unavailable, using fallback data:', e.message); return fallback; }
}

export async function getHomePage() {
  try { return await get('/home'); }
  catch (e) { console.warn('[home] API unavailable, using fallback data:', e.message); return homeFallback; }
}

export async function getTrainingPage() {
  try { return await get('/training'); }
  catch (e) { console.warn('[training] API unavailable, using fallback data:', e.message); return trainingFallback; }
}

export async function getCourse(slug) {
  try { return await get(`/courses/${encodeURIComponent(slug)}`); }
  catch (e) {
    if (e.status === 404) return null;
    return courseFallback(slug);
  }
}

export async function getArticles({ category, search } = {}) {
  const qs = new URLSearchParams({ limit: '50' });
  if (category) qs.set('category', category);
  if (search) qs.set('search', search);
  try {
    const [articles, categories] = await Promise.all([get(`/articles?${qs}`), get('/categories')]);
    return { articles, categories };
  } catch {
    const s = (search || '').toLowerCase();
    const articles = fallback.featured.filter(
      (a) => (!category || a.category_slug === category) && (!s || a.title.toLowerCase().includes(s)));
    return { articles, categories: fallback.categories };
  }
}

export async function getArticle(slug) {
  try { return await get(`/articles/${encodeURIComponent(slug)}`); }
  catch (e) {
    if (e.status === 404) return null;
    return fallback.featured.find((a) => a.slug === slug) || null;
  }
}

export function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(value));
}
