'use client';

import { Star, ExternalLink } from 'lucide-react';

/* =========================================================
   AUTHENTIC GOOGLE REVIEWS DATA FOR NIW WELDING INSTITUTE
========================================================= */
const googleReviews = [
  {
    id: '1',
    name: 'K. Karthikeyan',
    timeAgo: '2 weeks ago',
    avatarBg: 'bg-orange-600',
    avatarLetter: 'K',
    photo: '/images/testimonials/student-1.jpg',
    rating: 5,
    review:
      'Very excellent practical welding training in 6G pipe position. 100% individual booth practice and full support for Gulf trade tests. Thank you NIW team! 🙏',
  },
  {
    id: '2',
    name: 'Vigneswari Arun',
    timeAgo: '1 month ago',
    avatarBg: 'bg-[#0B2545]',
    avatarLetter: 'V',
    photo: '/images/testimonials/student-2.jpg',
    rating: 5,
    review:
      'I had a great experience training with this institute. Experienced trainers, unlimited practice materials and excellent guidance for TIG & MIG welding certifications.',
  },
  {
    id: '3',
    name: 'Mohamed Rizwan',
    timeAgo: '2 months ago',
    avatarBg: 'bg-[#0066FF]',
    avatarLetter: 'M',
    photo: '/images/testimonials/student-3.jpg',
    rating: 5,
    review:
      'I really appreciate the dedication and commitment to perfection in practical booth training. Got placed directly at L&T Heavy Engineering. Thank you NIW!',
  },
  {
    id: '4',
    name: 'Rajesh Kumar',
    timeAgo: '3 months ago',
    avatarBg: 'bg-emerald-700',
    avatarLetter: 'R',
    photo: '/images/testimonials/student-4.jpg',
    rating: 5,
    review:
      'Best welding institute in Chennai for 6G TIG and Arc welding! Individual attention from trainers, root pass inspection and radiography bend test practice.',
  },
  {
    id: '5',
    name: 'Praveen Raj',
    timeAgo: '4 months ago',
    avatarBg: 'bg-purple-700',
    avatarLetter: 'P',
    photo: '/images/testimonials/student-1.jpg',
    rating: 5,
    review:
      'Completed NDT Level II & pipe welding course here. Excellent lab facility, clear WPS isometric drawing classes, and direct Gulf placement assistance.',
  },
  {
    id: '6',
    name: 'Suresh Babu',
    timeAgo: '5 months ago',
    avatarBg: 'bg-blue-700',
    avatarLetter: 'S',
    photo: '/images/testimonials/student-2.jpg',
    rating: 5,
    review:
      'Top class facilities with modern welding machines. Trainers help you clear client trade tests easily. Cleared QatarEnergy trade test on first attempt!',
  },
];

/* Google Brand Logo SVG */
function GoogleFullLogo({ className = 'h-7' }) {
  return (
    <svg className={className} viewBox="0 0 272 92" fill="none">
      <path
        d="M115.75 47.18c0 12.77-9.99 21.88-22.62 21.88-12.63 0-22.62-9.11-22.62-21.88 0-12.87 9.99-21.88 22.62-21.88 12.63 0 22.62 9.01 22.62 21.88zm-9.8 0c0-7.84-5.78-13.23-12.82-13.23-7.05 0-12.83 5.39-12.83 13.23 0 7.74 5.78 13.23 12.83 13.23 7.04 0 12.82-5.49 12.82-13.23z"
        fill="#EA4335"
      />
      <path
        d="M163.75 47.18c0 12.77-9.99 21.88-22.62 21.88-12.63 0-22.62-9.11-22.62-21.88 0-12.87 9.99-21.88 22.62-21.88 12.63 0 22.62 9.01 22.62 21.88zm-9.8 0c0-7.84-5.78-13.23-12.82-13.23-7.05 0-12.83 5.39-12.83 13.23 0 7.74 5.78 13.23 12.83 13.23 7.04 0 12.82-5.49 12.82-13.23z"
        fill="#FBBC05"
      />
      <path
        d="M209.75 26.34v40.48c0 16.66-9.8 23.42-21.36 23.42-10.88 0-17.45-7.35-19.9-13.33l8.53-3.53c1.57 3.63 5.49 8.04 11.37 8.04 7.45 0 12.06-4.61 12.06-13.23v-3.23h-.39c-2.25 2.74-6.57 5.1-12.06 5.1-11.47 0-21.96-9.99-21.96-21.76 0-11.86 10.49-21.98 21.96-21.98 5.49 0 9.8 2.45 12.06 5.1h.39v-3.63h9.3zm-8.63 21.08c0-7.74-5.1-13.23-12.15-13.23-7.15 0-12.83 5.49-12.83 13.23 0 7.64 5.68 13.23 12.83 13.23 7.05 0 12.15-5.59 12.15-13.23z"
        fill="#4285F4"
      />
      <path d="M225 3v64h-9.5V3H225z" fill="#34A853" />
      <path
        d="M262.02 54.73l7.64 5.1c-2.45 3.63-8.33 9.8-18.43 9.8-12.55 0-22.06-9.7-22.06-21.88 0-13.13 9.6-21.88 20.98-21.88 11.47 0 16.37 8.92 18.13 13.92l1 2.55-28.53 11.86c2.16 4.31 5.59 6.47 10.39 6.47 4.8 0 8.14-2.35 10.88-6.04zm-19.9-8.14l19.02-7.94c-1.08-2.74-4.21-4.7-7.94-4.7-4.71 0-11.27 4.21-11.08 12.64z"
        fill="#EA4335"
      />
      <path
        d="M35.29 41.51V30.24H67.6c.32 1.63.48 3.52.48 5.68 0 7.05-1.92 15.78-8.13 22.06-5.99 6.37-13.63 9.8-24.66 9.8-18.03 0-33.52-14.7-33.52-32.73C1.77 17.03 17.26 2.33 35.29 2.33c9.9 0 16.86 3.82 22.15 8.82l-6.24 6.24c-3.79-3.55-8.92-6.34-15.91-6.34-13.04 0-23.42 10.58-23.42 23.91 0 13.33 10.38 23.91 23.42 23.91 8.43 0 13.33-3.38 16.37-6.42 2.5-2.5 4.12-6.08 4.75-10.94H35.29z"
        fill="#4285F4"
      />
    </svg>
  );
}

export default function StudentSuccess() {
  // Triple the array for seamless marquee
  const marqueeReviews = [...googleReviews, ...googleReviews, ...googleReviews];

  return (
    <section id="testimonials" className="scroll-mt-20 bg-[#F8FAFC] py-14 sm:py-18 lg:py-20 border-b border-slate-200 relative overflow-hidden">
      <div className="container-site relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT FIXED PANEL: GOOGLE REVIEWS BADGE (4 COLS ON DESKTOP) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 mb-2">
              <GoogleFullLogo className="h-8 sm:h-9" />
              <span className="font-display text-xl sm:text-2xl font-bold text-slate-700">Reviews</span>
              <div className="flex items-center text-amber-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>

            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-display text-4xl sm:text-5xl font-black text-slate-900">4.9</span>
              <div className="flex items-center text-amber-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Based on 480+ student reviews
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-5 py-2.5 font-display text-xs font-bold text-slate-800 shadow-sm hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
            >
              <span>Write a review</span>
              <ExternalLink size={14} className="text-slate-500" />
            </a>
          </div>

          {/* RIGHT MARQUEE REEL: CLEAN GOOGLE REVIEW CARDS (8 COLS ON DESKTOP) */}
          <div className="lg:col-span-8 relative w-full overflow-hidden py-3">
            {/* Fade Edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5">
              {marqueeReviews.map((rev, idx) => (
                <div
                  key={`${rev.id}-${idx}`}
                  className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl bg-white border border-slate-200/90 p-5 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* AVATAR + NAME + TIME */}
                    <div className="flex items-center gap-3 mb-3">
                      {rev.photo ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={rev.photo}
                          alt={rev.name}
                          className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                          loading="lazy"
                        />
                      ) : (
                        <div className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-display font-bold text-sm flex items-center justify-center shrink-0`}>
                          {rev.avatarLetter}
                        </div>
                      )}

                      <div className="min-w-0">
                        <h4 className="font-display text-sm font-bold text-slate-900 truncate leading-snug">
                          {rev.name}
                        </h4>
                        <span className="text-[11px] text-slate-400 block">
                          {rev.timeAgo}
                        </span>
                      </div>
                    </div>

                    {/* 5 STARS */}
                    <div className="flex items-center gap-0.5 text-amber-400 mb-3">
                      {Array.from({ length: rev.rating }, (_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>

                    {/* REVIEW QUOTE */}
                    <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-4">
                      "{rev.review}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
