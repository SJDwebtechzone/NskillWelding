// Used only when the Express API is unreachable, so the page still renders in development.
export const fallback = {
  categories: [
    { slug: 'welding-basics', name: 'Welding Basics', icon: 'welder', count_type: 'articles', item_count: 20 },
    { slug: 'welding-processes', name: 'Welding Processes', icon: 'pipe', count_type: 'articles', item_count: 25 },
    { slug: 'welding-quality', name: 'Welding Quality', icon: 'shield', count_type: 'articles', item_count: 18 },
    { slug: 'codes-standards', name: 'Codes & Standards', icon: 'book', count_type: 'articles', item_count: 22 },
    { slug: 'safety-ppe', name: 'Safety & PPE', icon: 'hardhat', count_type: 'articles', item_count: 15 },
    { slug: 'career-industry', name: 'Career & Industry', icon: 'chart', count_type: 'articles', item_count: 16 },
    { slug: 'videos-tutorials', name: 'Videos & Tutorials', icon: 'play', count_type: 'videos', item_count: 30 },
  ],
  featured: [
    { slug: 'what-is-welding-complete-guide-for-beginners', title: 'What is Welding? A Complete Guide for Beginners', excerpt: 'Learn the fundamentals of welding, its importance, types and real-world applications.', category_slug: 'welding-basics', category_name: 'Welding Basics', read_minutes: 5, published_at: '2026-05-10', has_video: false,
      content: 'Welding joins two metal parts by melting them at the joint and letting them fuse as they cool.\n\nStart the API server to load the full article from PostgreSQL.' },
    { slug: 'tig-vs-mig-vs-arc-welding', title: 'TIG vs MIG vs ARC Welding – Which Process is Right for You?', excerpt: 'A detailed comparison to help you understand the strengths, limitations and best applications.', category_slug: 'welding-processes', category_name: 'Welding Processes', read_minutes: 7, published_at: '2026-05-08', has_video: false,
      content: 'ARC is portable and forgiving, TIG is the most precise, and MIG is the fastest for fabrication.\n\nStart the API server to load the full article from PostgreSQL.' },
    { slug: 'understanding-weld-defects-and-prevention', title: 'Understanding Weld Defects and How to Prevent Them', excerpt: 'Identify common weld defects, their causes and effective prevention techniques.', category_slug: 'welding-quality', category_name: 'Welding Quality', read_minutes: 6, published_at: '2026-05-05', has_video: false,
      content: 'Porosity, undercut, lack of fusion and cracks are the most common weld defects.\n\nStart the API server to load the full article from PostgreSQL.' },
    { slug: 'importance-of-welding-codes-and-standards', title: 'Importance of Welding Codes and Standards in Industry', excerpt: 'Why welding codes and standards are critical for safety, quality and compliance.', category_slug: 'codes-standards', category_name: 'Codes & Standards', read_minutes: 4, published_at: '2026-05-03', has_video: true,
      content: 'Codes such as ASME IX, AWS D1.1 and API 1104 define how welders and procedures are qualified.\n\nStart the API server to load the full article from PostgreSQL.' },
  ],
  resources: [
    { id: 1, title: 'Welding Symbols Guide', file_type: 'PDF', size_label: '2.4 MB' },
    { id: 2, title: 'Welding Terminology Glossary', file_type: 'DOC', size_label: '1.8 MB' },
    { id: 3, title: 'Welding Inspection Checklist', file_type: 'XLS', size_label: '1.2 MB' },
    { id: 4, title: 'WPS & PQR Explained', file_type: 'PDF', size_label: '3.1 MB' },
  ],
  videos: [
    { id: 1, title: 'TIG Welding Basics – Setup and Techniques', description: 'Learn the basic setup and techniques for perfect TIG welding.', duration: '08:45', published_at: '2026-05-09' },
    { id: 2, title: '6G Pipe Welding – Tips for Better Performance', description: 'Professional tips to improve your 6G pipe welding skills.', duration: '06:30', published_at: '2026-05-06' },
    { id: 3, title: 'Welding Safety – Best Practices Every Welder Must Follow', description: 'Essential safety practices to protect yourself on the job.', duration: '05:12', published_at: '2026-05-02' },
  ],
  faqs: [
    { id: 1, question: 'What is the difference between TIG and MIG welding?', answer: 'TIG uses a non-consumable tungsten electrode and separate filler rod for precise, clean welds. MIG feeds wire continuously, so it is faster for fabrication work.' },
    { id: 2, question: 'What is WPS, PQR and WPQR?', answer: 'A WPS says how to make a weld, a PQR proves that procedure works, and a WPQR proves an individual welder can follow it.' },
    { id: 3, question: 'What are the types of welding positions?', answer: 'Plate: 1G flat, 2G horizontal, 3G vertical, 4G overhead. Pipe: 5G fixed horizontal and 6G fixed at 45 degrees.' },
    { id: 4, question: 'What are the common welding defects?', answer: 'Porosity, undercut, lack of fusion, incomplete penetration, slag inclusion and cracks.' },
    { id: 5, question: 'How can I become a certified welder?', answer: 'Train, build skill in your required positions, then pass a witnessed qualification test to a code such as ASME IX or AWS D1.1.' },
    { id: 6, question: 'Which welding process is best for beginners?', answer: 'ARC welding (SMAW). It teaches arc control and the skills carry over to TIG and MIG.' },
  ],
};

// Homepage backup data (used only when the API is unreachable)
export const homeFallback = {
  courses: [
    { slug: 'tig-welding', title: 'TIG Welding', short_desc: 'Precision welding for thin materials and critical applications.', icon: 'torch' },
    { slug: 'mig-welding', title: 'MIG/MAG Welding', short_desc: 'High productivity welding for industrial and manufacturing sectors.', icon: 'wire' },
    { slug: 'arc-welding', title: 'ARC Welding', short_desc: 'Shielded metal arc welding training for strong and reliable joints.', icon: 'zap' },
    { slug: '6g-pipe-welding', title: '6G Pipe Welding', short_desc: 'Advance your skills in 6G pipe welding with certification support.', icon: 'pipe' },
    { slug: 'structural-welding', title: 'Structural Welding', short_desc: 'Welding training for structural steel and heavy fabrication.', icon: 'beam' },
    { slug: 'stainless-steel-welding', title: 'Stainless Steel', short_desc: 'Specialized training for stainless steel and exotic materials.', icon: 'shield' },
  ],
  stats: [
    { value: '15+', label: 'Years', sub_label: 'Of Excellence', icon: 'award' },
    { value: '25+', label: 'Trainers', sub_label: 'Expert Instructors', icon: 'trainer' },
    { value: '5000+', label: 'Students', sub_label: 'Trained Successfully', icon: 'students' },
    { value: '100+', label: 'Companies', sub_label: 'Industry Partnerships', icon: 'factory' },
  ],
  facilities: [
    { id: 1, title: 'Welding Workshop', caption: 'Individual booths so every student gets real arc time' },
    { id: 2, title: 'Classroom', caption: 'Theory, welding symbols and WPS reading' },
    { id: 3, title: 'Modern Equipment', caption: 'Industrial TIG, MIG and ARC machines' },
    { id: 4, title: '6G Pipe Setup', caption: 'Fixed-position pipe rigs for 5G and 6G practice' },
    { id: 5, title: 'Testing & Inspection', caption: 'Visual inspection, bend tests and NDT demonstrations' },
  ],
  testimonials: [
    { id: 1, name: 'K. Ramesh', course: '6G Pipe Welding', rating: 5, quote: 'The 6G pipe practical training at NIW helped me clear my client witness test for Saudi Aramco. Individual booths and expert trainers made all the difference!' },
    { id: 2, name: 'S. Vignesh', course: 'TIG & Stainless Steel', rating: 5, quote: 'Top class TIG welding practice. 80% practical hours gave me confidence in root pass and argon purging.' },
    { id: 3, name: 'M. Arunkumar', course: 'MIG/MAG Welding', rating: 5, quote: 'Got placed in a leading structural fabrication company right after completing my course. Highly recommended institute!' },
    { id: 4, name: 'P. Karthik', course: 'Structural & ARC', rating: 5, quote: 'Great faculty, excellent safety equipment, and individual machine access every single day.' },
  ],
  recruiters: [
    { id: 1, name: 'L&T Heavy Engineering' },
    { id: 2, name: 'Hyundai Heavy Industries' },
    { id: 3, name: 'Schwing Stetter' },
    { id: 4, name: 'Technip Energies' },
    { id: 5, name: 'Godrej & Boyce' },
    { id: 6, name: 'Thermax Limited' },
    { id: 7, name: 'ISGEC Heavy Engineering' },
    { id: 8, name: 'Larsen & Toubro Construction' },
  ],
  faqs: [
    { id: 1, question: 'What is the eligibility for welding courses?', answer: 'Most courses are open to 10th pass, ITI and diploma candidates, and to anyone interested in welding.' },
    { id: 2, question: 'Do you provide practical training?', answer: 'Yes. About 80% of training time is hands-on practice in our workshop.' },
    { id: 3, question: 'How can I join the course?', answer: 'Send an enquiry, call or WhatsApp us for course details, fees and the next batch date.' },
  ],
  courseOptions: ['TIG Welding', 'MIG/MAG Welding', 'ARC Welding', '6G Pipe Welding', 'Structural Welding', 'Stainless Steel', 'Fitter Training'],
};

export const trainingFallback = { courses: homeFallback.courses, stats: homeFallback.stats, facilities: homeFallback.facilities };

// Minimal course page when the API is down (full content lives in PostgreSQL)
export function courseFallback(slug) {
  const base = homeFallback.courses.find((c) => c.slug === slug);
  if (!base) return null;
  return {
    ...base, tagline: 'Practical welding training for a better career', overview: `${base.short_desc} Start the API server to load the full course content from PostgreSQL.`,
    intro: base.short_desc, industries: [], mode: 'Theory + Practical', location: 'Chennai, India', learn_points: [], modules: [], details: [], careers: [], faqs: [], gallery: [],
    related: homeFallback.courses.filter((c) => c.slug !== slug).slice(0, 3), courseOptions: homeFallback.courseOptions,
  };
}
