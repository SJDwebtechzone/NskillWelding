export const site = {
  name: 'National Institute of Welding',
  tagline: 'Learn. Practice. Qualify. Build Your Career.',
  phone: '+91 93544 47475',
  phoneHref: 'tel:+919354447475',
  whatsappHref:
    'https://wa.me/919354447475?text=' +
    encodeURIComponent('Hi, I am reading the NIW Knowledge Center and would like course details, fees and next batch date.'),
  email: 'info@weldingskill.com',
  website: 'www.weldingskill.com',
  address: ['No.12, WeldingSkill Institute,', 'SIDCO Industrial Estate,', 'Ambattur, Chennai - 600 098,', 'Tamil Nadu, India.'],
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
    linkedin: 'https://linkedin.com/',
  },
};

export const trainingLinks = [
  ['TIG Welding', '/courses/tig-welding'],
  ['MIG Welding', '/courses/mig-welding'],
  ['ARC Welding', '/courses/arc-welding'],
  ['6G Pipe Welding', '/courses/6g-pipe-welding'],
  ['Structural Welding', '/courses/structural-welding'],
  ['Stainless Steel Welding', '/courses/stainless-steel-welding'],
  ['Fitter Training', '/courses/fitter-training'],
  ['All Courses', '/courses'],
];

export const serviceLinks = [
  ['Welder Qualification', '/services/welder-qualification'],
  ['Welding Inspection', '/services/welding-inspection'],
  ['NDT Services', '/services/ndt'],
  ['WPS / PQR / WPQT', '/services/wps-pqr-wpqt'],
  ['Corporate Training', '/services/corporate-training'],
  ['Welder Assessment', '/services/welder-assessment'],
];

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Welding Training', href: '/courses', children: trainingLinks },
  { label: 'Industrial Services', href: '/services', children: serviceLinks },
  { label: 'Career', href: '/career' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Knowledge', href: '/knowledge', children: [
    ['Knowledge Center', '/knowledge'], ['All Articles', '/knowledge/articles'], ['FAQ', '/knowledge#faq'],
  ] },
  { label: 'Contact', href: '/contact' },
];

// Page photos. Leave as null until the file exists in frontend/public/images/,
// then set the path, e.g. homeHero: '/images/home-hero.jpg'.
// (A path to a missing file makes the browser request it on every page load.)
export const images = {
  homeHero: '/images/welding-hero.jpg',        // homepage hero
  knowledgeHero: null,   // Knowledge Center hero
  trainingHero: null,    // Welding Training hero
  careerBand: null,      // "Build a successful career" band
  enquireBox: null,      // homepage enquiry box background
  ctaBand: null,         // dark "Ready to start…" band
  whyPractical: null,    // Why Choose NIW photos (training page)
  whyTheory: null,
  whyPractice: null,
};

/** "url('...'), " for a set photo, "" otherwise — for use inside a backgroundImage list */
export const bgUrl = (src) => (src ? `url('${src}'), ` : '');
