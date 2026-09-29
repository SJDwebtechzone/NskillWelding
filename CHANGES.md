# Update v3.2: fix "Invalid hook call" crash on Windows

## Cause
Pages requested 9 photo files that don't exist yet (why-practical.jpg, training-hero.jpg, …). Each missing file made
Next.js render its built-in 404 page, and on Windows that 404 render crashed with "Invalid hook call"
(typically because of a stale/locked `.next` cache or duplicated React from path-casing).

## Fixed
- All page photos are now set in one place: `images` in `frontend/lib/site.js`. A photo is only requested once you set its path,
  so no requests for missing files are made.
- Added a site-wide branded "Page not found" page (`frontend/app/not-found.jsx`).
- README: Windows troubleshooting steps.

## Files changed
`frontend/lib/site.js`, `frontend/app/not-found.jsx` (new), and the components Hero, HomeHero, PageHero, CourseSections,
CtaBand, CareerBand, HomeFaqEnquire, WhyChooseDetailed.
