export const site = {
  name: 'National Institute of Welding',
  tagline: 'Learn. Practice. Qualify. Build Your Career.',
  phone: '+91 81100 00330 / +91 80560 63023',
  phone1: '+91 81100 00330',
  phone2: '+91 80560 63023',
  phoneHref: 'tel:+918110000330',
  phoneHref2: 'tel:+918056063023',
  whatsappHref:
    'https://wa.me/918110000330?text=' +
    encodeURIComponent('Hi, I am reading the NIW website and would like course details, fees and next batch date.'),
  email: 'enquiry@weldingskill.com',
  website: 'www.weldingskill.com',
  address: [
    'No.2/24, Pillaiyar Koil Street,',
    'Raghavendra Nagar,',
    'Irandamkattalai, Kovur,',
    'Chennai - 600 128, Tamil Nadu, India.',
  ],
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

export const images = {
  homeHero: '/images/welding-hero.jpg',
  knowledgeHero: null,
  trainingHero: null,
  careerBand: null,
  enquireBox: null,
  ctaBand: null,
  whyPractical: null,
  whyTheory: null,
  whyPractice: null,
};

export const bgUrl = (src) => (src ? `url('${src}'), ` : '');
