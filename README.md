# NIW Website — Next.js + Express + PostgreSQL

Homepage and Knowledge Center for **National Institute of Welding**, built from the approved designs.

```
niw-knowledge-center/
├── database/          schema.sql + seed.sql (PostgreSQL)
├── backend/           Express.js REST API (Node 18+)
├── frontend/          Next.js 14 (App Router) + Tailwind CSS
└── docker-compose.yml PostgreSQL 16 for local development
```

## 1. Start PostgreSQL

**With Docker** (creates tables and loads sample data automatically):
```bash
docker compose up -d
```

**Without Docker:** create a database and user, then run:
```bash
cd backend && npm install && cp .env.example .env   # edit DATABASE_URL if needed
npm run db:init
```

### Upgrading from an earlier version?
Every SQL file is safe to re-run, so this adds the new tables and content without duplicating anything:
```bash
cd backend
npm run db:update
```

## 2. Start the API (port 5000)
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
Check it: http://localhost:5000/api/health → `{"status":"ok","db":"connected"}`

## 3. Start the website (port 3000)
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000 (homepage) and http://localhost:3000/knowledge

If the API is not running, the page still renders using sample data from `frontend/lib/fallback.js`, so design work isn't blocked.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/home` | Homepage: courses, stats, facilities, testimonials, employers, FAQs |
| GET | `/api/training` | Welding Training page: all courses, stats, facilities |
| GET | `/api/courses` | All courses (card data) |
| GET | `/api/courses/:slug` | Full course page + 3 related courses |
| POST | `/api/enquiries` | Enquiry form (validated, rate-limited, saved to `enquiries`) |
| GET | `/api/knowledge` | Everything the page needs in one call (categories + counts, featured articles, resources, videos, FAQs) |
| GET | `/api/categories` | Categories with live article/video counts |
| GET | `/api/articles?category=&search=&featured=true&limit=` | Filtered article list |
| GET | `/api/articles/:slug` | Single article with full content |
| GET | `/api/resources` | Downloadable documents |
| GET | `/api/resources/:id/download` | Counts the download and sends the file |
| GET | `/api/videos?limit=` | Latest videos |
| GET | `/api/faqs` | Featured FAQs |
| GET | `/api/search?q=` | Live search across articles, videos, resources |
| POST | `/api/newsletter` `{ "email": "" }` | Newsletter sign-up (validated, rate-limited, duplicates ignored) |

The browser calls `/api/*` on the Next.js domain; `next.config.mjs` forwards those requests to Express, so no CORS setup is needed in production.

## Pages included
- `/` — Homepage (hero, courses, stats, training process, facilities, career, testimonials, employers, FAQ + enquiry form, CTA)
- `/courses` — Welding Training (all courses, why NIW, process, facilities)
- `/courses/[slug]` — Course detail, one template for every course: `/courses/tig-welding`, `/courses/6g-pipe-welding`, `/courses/fitter-training` …
- `/knowledge` — Knowledge Center (hero + live search, categories, featured articles, resource center, videos, FAQ accordion, newsletter)
- `/knowledge/articles` — all articles with category filter and search results
- `/knowledge/[slug]` — article detail page with Article schema
- `/knowledge/resources` — all downloads

Header/footer links to other pages (courses, services, about, contact…) are wired up and ready for those pages to be built.

## Enquiries (leads)
Every enquiry form submission is saved in the `enquiries` table with the course, experience and the page it came from. View them with:
```sql
SELECT created_at, full_name, whatsapp, interest, experience, source_page FROM enquiries ORDER BY created_at DESC;
```
(The planned admin panel will show these on screen.)

## Adding your real content

**Photos (important — use your own workshop photos, not stock images):**
- Knowledge Center hero: `images.knowledgeHero` in `frontend/lib/site.js` (about 1920×900, subject on the right).
- Article images: put files in `frontend/public/images/` and set `articles.image_url`, e.g. `/images/tig-vs-mig.jpg`.
- Until a photo is added, cards show a styled welding-arc placeholder.

**Homepage:** hero photo → `images.homeHero` in `frontend/lib/site.js`. Course and facility photos → set `courses.image_url` / `facilities.image_url`. Edit the stats (15+, 25+, 5000+, 100+) in the `site_stats` table — use only numbers you can verify.

**Course pages:** the content for all 7 courses (overview, what you'll learn, modules, details, careers, FAQs) is in `database/tools/build_seed_pages.py`. Edit it, run `python3 database/tools/build_seed_pages.py`, then `npm run db:update`. The update only fills courses that have no content yet; to overwrite a course, first run `UPDATE courses SET overview = NULL WHERE slug = 'tig-welding';`.
Course video: set `courses.video_youtube_id`. Course hero photo: set `courses.hero_image_url`. Gallery photos: the `gallery` JSON column.

**⚠ Before going live, replace the sample data from the mockups:**
- `testimonials` — the 4 reviews are placeholders. Use genuine student reviews (with permission for names/photos).
- `recruiters` — list only companies that have actually hired NIW students. Company logos need their permission; without `logo_url`, names show as text.
- `site_stats` — use numbers you can verify.

**Other photos:** copy the file into `frontend/public/images/`, then set its path in the `images` list at the bottom of `frontend/lib/site.js` (e.g. `homeHero: '/images/home-hero.jpg'`). Leave entries as `null` until the file exists, so browsers don't request missing files.

**Videos:** set `videos.youtube_id` (the part after `watch?v=`). The thumbnail loads from YouTube and the card opens the video.

**Downloads:** copy files into `backend/public/files/` using the names in `resources.file_url` (e.g. `welding-symbols-guide.pdf`), or set `file_url` to a full https link.

**Contact details, social links, WhatsApp message, menus:** edit `frontend/lib/site.js`.

## Built in
- Tailwind theme tokens (`niw.orange`, `niw.ink`…) in `tailwind.config.js`
- Self-hosted fonts (Barlow Condensed + Poppins via @fontsource) — no Google Fonts request
- Responsive down to 320px, mobile menu, fixed Call / WhatsApp / Enquire bar on phones
- Keyboard-accessible dropdowns and accordion, visible focus, reduced-motion support
- SEO: page metadata, canonical URLs, FAQPage + Article JSON-LD schema, ISR caching (60 s)
- API: helmet security headers, input validation, rate-limited newsletter endpoint, parameterised SQL

## Production
```bash
cd frontend && npm run build && npm start     # or deploy to Vercel, set API_URL
cd backend && npm start                        # set DATABASE_URL, CORS_ORIGIN (and DATABASE_SSL=true for hosted DBs)
```

## Troubleshooting (Windows)
**"Invalid hook call" / "Cannot read properties of null (reading 'useContext')"**, often with `Caching failed for pack ... ENOENT` warnings:
1. Stop every running `npm run dev` window (Ctrl + C).
2. In `frontend`, delete the `.next` and `node_modules` folders, then run `npm install`.
3. Open the terminal *inside* the project folder and don't retype the path in different letter case (`c:\users\...` vs `C:\Users\...`); Windows treats them as the same folder, but Next.js can load React twice.
4. If it persists, move the project out of `Downloads` / OneDrive to a short path such as `C:\projects\niw-website` (antivirus and sync tools lock the `.next` cache files).

**`API unavailable, using fallback data`** — the backend isn't running. Start it with `npm run dev` inside `backend` (and make sure PostgreSQL is running).
