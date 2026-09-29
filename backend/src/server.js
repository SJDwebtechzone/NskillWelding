import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';
import knowledgeRoutes from './routes/knowledge.js';
import homeRoutes from './routes/home.js';
import { pool } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(',') }));
app.use(express.json({ limit: '10kb' }));
app.use('/api/newsletter', rateLimit({ windowMs: 15 * 60 * 1000, limit: 10 }));

app.get('/api/health', async (_req, res) => {
  try { await pool.query('SELECT 1'); res.json({ status: 'ok', db: 'connected' }); }
  catch { res.status(503).json({ status: 'degraded', db: 'unreachable' }); }
});

app.use('/api', knowledgeRoutes);
app.use('/api', homeRoutes);

app.use((_req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error. Try again in a moment.' });
});

app.listen(PORT, () => console.log(`NIW API running on http://localhost:${PORT}`));
