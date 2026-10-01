import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  ShieldCheck,
  Flame,
  Zap,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Home,
  Wrench,
  TrendingUp,
  Target,
  Compass,
  Cpu,
  Layers,
  Activity,
  UserCheck,
  Building,
  Users,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Sliders,
  ShieldAlert,
  ArrowRightCircle,
  Trophy,
  Globe,
  Eye,
  Factory,
  HardHat,
  Anchor,
} from 'lucide-react';
import { site } from '@/lib/site';

export const metadata = {
  title: 'About Us | National Institute of Welding (NIW) Chennai',
  description:
    'National Institute of Welding (NIW) is an ISO 9001:2015 certified, IIW approved & NSDC accredited institute building skilled welders for global industry.',
  alternates: { canonical: '/about' },
};

const INDUSTRY_SECTORS = [
  { id: 1, name: 'Manufacturing', icon: Factory },
  { id: 2, name: 'Fabrication', icon: Wrench },
  { id: 3, name: 'Construction', icon: Building },
  { id: 4, name: 'Heavy Engineering', icon: HardHat },
  { id: 5, name: 'Infrastructure', icon: Layers },
  { id: 6, name: 'Oil & Gas', icon: Zap },
  { id: 7, name: 'Petrochemical', icon: Sparkles },
  { id: 8, name: 'Power', icon: Activity },
  { id: 9, name: 'Shipbuilding', icon: Anchor },
  { id: 10, name: 'Industrial Maintenance', icon: Sliders },
  { id: 11, name: 'Structural Fabrication', icon: Cpu },
];

const STRENGTH_FORMULA = [
  'People',
  'Process',
  'Safety',
  'Quality',
  'Technology',
  'Competency',
];

const TRAINING_FOCUS_ITEMS = [
  { id: 1, title: 'ARC Welding', desc: 'Manual Metal Arc (SMAW) multi-pass joint techniques', icon: Flame },
  { id: 2, title: 'TIG Welding', desc: 'Gas Tungsten Arc Welding (GTAW) for SS & Alloy', icon: Zap },
  { id: 3, title: 'MIG Welding', desc: 'Gas Metal Arc Welding (GMAW) wire feed & MAG', icon: Cpu },
  { id: 4, title: '3G Welding', desc: 'Vertical groove position plate welding qualification', icon: Layers },
  { id: 5, title: '6G Welding', desc: '45° inclined pipe coupon root & hot pass mastery', icon: Activity },
  { id: 6, title: 'Pipe Welding', desc: 'High-pressure carbon steel & alloy piping joints', icon: Wrench },
  { id: 7, title: 'Structural Welding', desc: 'Heavy structural beam, girder & plate fabrication', icon: Building },
  { id: 8, title: 'Stainless Steel Welding', desc: 'Precision GTAW/GMAW stainless & duplex steel', icon: Sparkles },
  { id: 9, title: 'Welding Inspection', desc: 'Weld defect analysis, codes & QA/QC standards', icon: Target },
  { id: 10, title: 'NDT & Quality', desc: 'Non-Destructive Testing (Radiography, UT, MPI, LPT)', icon: ShieldCheck },
  { id: 11, title: 'Welder Qualification', desc: 'WPS / PQR / WPQT testing as per AWS & ASME', icon: Award },
  { id: 12, title: 'Industrial Welding Skills', desc: 'Comprehensive safety, blueprint reading & practical skill', icon: Compass },
];

const WHY_CHOOSE_PILLARS = [
  {
    num: '01',
    title: 'Hands-On Practical Training',
    text: 'Develop welding skills through practical sessions, demonstrations and continuous practice rather than relying only on classroom theory.',
  },
  {
    num: '02',
    title: 'Industry-Oriented Learning',
    text: 'Understand welding processes, materials, equipment, safety, quality and practical applications relevant to industrial environments.',
  },
  {
    num: '03',
    title: 'Multiple Welding Processes',
    text: 'Build your foundation across ARC, TIG, MIG, 3G, 6G, pipe and structural welding.',
  },
  {
    num: '04',
    title: 'Experienced Technical Team',
    text: 'Learn from experienced welding instructors and certified inspectors who provide hands-on guidance and industry insights.',
  },
  {
    num: '05',
    title: 'Qualification & Certification Pathways',
    text: 'Develop the skills and technical knowledge needed to pursue relevant welding qualification and certification pathways.',
  },
  {
    num: '06',
    title: 'Career-Focused Training',
    text: 'Our goal is not simply to teach you how to weld — it is to help you develop the skills and confidence required to pursue opportunities in the welding and fabrication industry.',
  },
];

const PROGRESSION_STEPS = [
  { step: '01', title: 'Basic Welding', desc: 'Arc fundamentals & safety' },
  { step: '02', title: 'Process Specialization', desc: 'TIG / MIG / SMAW techniques' },
  { step: '03', title: '3G / 6G Positional', desc: 'Vertical & 45° pipe coupons' },
  { step: '04', title: 'Pipe & Structural', desc: 'Industrial pressure vessels & beams' },
  { step: '05', title: 'Inspection & Quality', desc: 'Weld defects, NDT & standards' },
  { step: '06', title: 'Advanced Skills', desc: 'Mastery, WPS/PQR & career growth' },
];

const LEADERSHIP_TEAM = [
  {
    name: 'V. P. Sivasankar',
    title: 'Director',
    expertise: 'QMS • Safety • NDT',
    profile:
      'BE Mechanical and M.Tech in Industrial Safety with 18+ years of experience. Consultant, Auditor and Trainer in QMS, SMS, Welding, NDT and Energy Management.',
    initials: 'VS',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'T. R. Sriram',
    title: 'Director',
    expertise: 'Strategic Management • LEAN • TPM',
    profile:
      'Electrical & Electronics Engineer with 35+ years of experience. Consultant, Auditor and Trainer in Strategic Management, LEAN, TPM, SCM, QMS, EMS and IATF Standards.',
    initials: 'TS',
    color: 'from-cyan-600 to-blue-700',
  },
  {
    name: 'S. Karthikeyan',
    title: 'Director',
    expertise: 'HR • Competency Management',
    profile:
      'Graduate in Business Administration and Master\'s in Social Work (PM & IR), with 21+ years of experience. HR specialist and certified trainer in competency development.',
    initials: 'SK',
    color: 'from-[#0B2545] to-slate-900',
  },
];

const EXPLORE_PROGRAMS = [
  {
    icon: Flame,
    title: 'ARC Welding',
    desc: 'Build strong fundamentals in arc welding and develop practical welding skills.',
    badge: 'SMAW Basics to Heavy Plate',
  },
  {
    icon: Zap,
    title: 'TIG Welding',
    desc: 'Develop precision welding skills for applications involving stainless steel, aluminium and other materials.',
    badge: 'GTAW Argon Arc Precision',
  },
  {
    icon: Cpu,
    title: 'MIG Welding',
    desc: 'Learn productive MIG/MAG welding techniques used across industrial fabrication and manufacturing.',
    badge: 'GMAW Wire Feed & MAG',
  },
  {
    icon: Layers,
    title: '3G Welding',
    desc: 'Develop advanced positional welding skills for vertical welding applications.',
    badge: 'Vertical Plate Qualification',
  },
  {
    icon: Activity,
    title: '6G Welding',
    desc: 'Build advanced pipe-welding skills and prepare for challenging welding positions.',
    badge: '45° Inclined Pipe Coupon',
  },
  {
    icon: Building,
    title: 'Structural Welding',
    desc: 'Learn practical skills relevant to steel structures, fabrication and construction applications.',
    badge: 'Beams, Columns & Heavy Plates',
  },
  {
    icon: Target,
    title: 'Welding Inspection & NDT',
    desc: 'Develop knowledge of weld quality, inspection procedures and non-destructive testing.',
    badge: 'Radiography, UT, MPI & QA/QC',
  },
];

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    url: 'https://www.weldingskill.com/about',
    telephone: site.phone1,
    email: site.email,
    description:
      'National Institute of Welding (NIW) is an ISO 9001:2015 certified, IIW approved & NSDC accredited welding training and qualification institute in Kovur, Chennai.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* =========================================================
         1. HERO BANNER - PREMIUM METALLIC NAVY & SPLIT IMAGE
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B2545] py-14 text-white lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[#0066FF]/30 blur-3xl pointer-events-none"
        />

        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-[#0066FF]/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#38BDF8]">
              <Sparkles size={14} className="text-[#38BDF8]" />
              <span>ISO 9001:2015 Certified | IIW Approved | NSDC Accredited</span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
              ABOUT <span className="text-weld-blue">US</span>
            </h1>

            <h2 className="mt-2 font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#38BDF8]">
              National Institute of Welding
            </h2>

            <p className="mt-1 font-display text-base sm:text-lg font-bold text-slate-200">
              Building Skilled Welders. Strengthening Industry.
            </p>

            <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0066FF] bg-[#EBF3FE] inline-block px-3 py-1 rounded-md">
              Industry-Focused Welding Training | Practical Skill Development | Welding Qualification | Inspection &amp; Quality
            </p>

            <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
              <p>
                At the <strong className="text-white">National Institute of Welding</strong>, we help aspiring welders, working professionals and industrial organizations develop practical welding skills and technical knowledge aligned with modern industry requirements.
              </p>
              <p>
                From ARC, TIG and MIG welding to 3G, 6G, pipe welding, structural welding, welding inspection and advanced welding technology, our training ecosystem is designed to support your progression.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[#0066FF]/40 bg-slate-900/80 p-4 backdrop-blur-md">
              <p className="font-display text-sm font-extrabold uppercase tracking-wide text-[#38BDF8]">
                Learn the Skill. Build the Confidence. Shape Your Career.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/courses"
                  className="btn-orange text-xs font-extrabold uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg"
                >
                  Explore Welding Courses <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 font-display text-xs font-extrabold uppercase tracking-wider text-slate-200 hover:bg-[#0066FF] hover:text-white transition-all"
                >
                  Enquire Now
                </Link>
              </div>
            </div>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mt-6">
              <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <li>
                  <Link href="/" className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors">
                    <Home size={13} /> Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={12} className="text-slate-600" />
                  <span className="text-white" aria-current="page">
                    About Us
                  </span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#0066FF]/40 shadow-2xl bg-slate-900 group">
              <Image
                src="/images/facility-welding-booths.jpg"
                alt="National Institute of Welding Practical Welding Booths and Trainees"
                width={800}
                height={600}
                className="w-full h-[420px] object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-700 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0066FF] text-white">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-extrabold uppercase text-white">
                      Practical Workshop Booths
                    </h3>
                    <p className="text-xs text-slate-300">
                      18+ Practical Stations | Individual Torch Time | AWS &amp; ASME Standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. ACCREDITATION BADGES BAR
         ========================================================= */}
      <section className="bg-slate-900 py-6 border-b border-slate-800 text-white">
        <div className="container-site flex flex-wrap items-center justify-around gap-6">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0066FF]/20 text-[#38BDF8] border border-[#0066FF]/40">
              <Award size={24} />
            </div>
            <div>
              <span className="block font-display text-sm font-extrabold uppercase text-white">ISO 9001:2015</span>
              <span className="text-xs text-slate-400">Certified Quality Management</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="block font-display text-sm font-extrabold uppercase text-white">IIW APPROVED</span>
              <span className="text-xs text-slate-400">International Institute of Welding</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Sparkles size={24} />
            </div>
            <div>
              <span className="block font-display text-sm font-extrabold uppercase text-white">NSDC ACCREDITED</span>
              <span className="text-xs text-slate-400">Skill India Government Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. OUR MISSION & OUR VISION (DUAL CARDS)
         ========================================================= */}
      <section className="py-16 bg-[#0B2545] text-white relative border-b border-slate-800">
        <div className="container-site max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* OUR MISSION */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-2xl hover:border-[#0066FF] transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0066FF] text-white shadow-lg">
                  <Target size={26} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                    Purpose &amp; Commitment
                  </span>
                  <h3 className="font-display text-2xl font-extrabold uppercase text-white">
                    Our Mission
                  </h3>
                </div>
              </div>
              <blockquote className="mt-4 text-sm sm:text-base text-slate-200 italic leading-relaxed border-l-4 border-[#0066FF] pl-4">
                &ldquo;To provide industry-focused welding training, skill development and quality-oriented services that empower individuals and support industrial excellence.&rdquo;
              </blockquote>
            </div>

            {/* OUR VISION */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-2xl hover:border-emerald-400 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-600 text-white shadow-lg">
                  <Eye size={26} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Aspiration &amp; Future
                  </span>
                  <h3 className="font-display text-2xl font-extrabold uppercase text-white">
                    Our Vision
                  </h3>
                </div>
              </div>
              <blockquote className="mt-4 text-sm sm:text-base text-slate-200 italic leading-relaxed border-l-4 border-emerald-500 pl-4">
                &ldquo;To become a trusted centre for welding training, qualification and inspection, developing a skilled workforce capable of meeting modern industrial standards.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         4. ABOUT NATIONAL INSTITUTE OF WELDING (OVERVIEW)
         ========================================================= */}
      <section className="py-16 bg-white text-slate-900">
        <div className="container-site max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0066FF]">
              <Sparkles size={14} /> Core Philosophy &amp; Approach
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-4xl">
              ABOUT NATIONAL INSTITUTE OF <span className="text-[#0066FF]">WELDING</span>
            </h2>
            <p className="mt-2 font-display text-lg font-bold text-[#0B2545]">
              More Than Welding Training — We Build Industry-Ready Skills
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl space-y-5 text-sm leading-relaxed text-slate-700 text-justify">
            <p className="text-base font-semibold text-slate-900 leading-snug">
              National Institute of Welding is an <strong>ISO 9001:2015 certified</strong>, <strong>IIW (International Institute of Welding) approved</strong> and <strong>NSDC-accredited</strong> welding training, welder qualification and inspection organization.
            </p>
            <p>
              Our approach combines <strong>practical welding training</strong>, <strong>technical knowledge</strong>, <strong>safety awareness</strong> and <strong>industry-oriented learning</strong> to help learners become better prepared for real-world welding applications.
            </p>
            <p>
              Whether you are starting your first welding course, upgrading your existing skills or preparing for advanced welding positions, our training ecosystem is designed to support your progression.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         5. OUR STRENGTH (NEW SECTION)
         ========================================================= */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"
        />

        <div className="container-site max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-2">
              <Trophy size={16} /> OUR STRENGTH
            </div>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
              A Team That Understands <span className="text-[#0066FF]">More Than Welding</span>
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl space-y-6">
            <p className="text-base font-medium text-slate-200 text-center">
              Welding quality depends on more than the welding process itself.
            </p>

            {/* Formula Pill Banner */}
            <div className="rounded-2xl border border-[#0066FF]/40 bg-[#0B2545]/90 p-6 shadow-xl">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-4">
                It requires an understanding of:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {STRENGTH_FORMULA.map((item, idx) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="rounded-xl border border-[#0066FF]/60 bg-[#0066FF]/20 px-4 py-2 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[#0066FF] transition-all">
                      {item}
                    </span>
                    {idx < STRENGTH_FORMULA.length - 1 && (
                      <span className="font-display text-base font-extrabold text-[#38BDF8]">
                        +
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
              Our multidisciplinary leadership allows National Institute of Welding to approach training and industrial requirements from multiple perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         6. CAREER-ORIENTED WELDING TRAINING (11 SECTORS GRID)
         ========================================================= */}
      <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0066FF]">
              <Globe size={16} /> CAREER-ORIENTED WELDING TRAINING
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-4xl">
              Prepare for Opportunities in India&apos;s <span className="text-[#0066FF]">Industrial &amp; Global</span> Welding Sector
            </h2>
            <p className="mt-3 font-display text-sm font-bold text-slate-600 max-w-2xl mx-auto">
              Skilled welding professionals are required across industries including:
            </p>
          </div>

          {/* 11 Industry Sectors Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDUSTRY_SECTORS.map((sector) => {
              const SecIcon = sector.icon;
              return (
                <div
                  key={sector.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-md hover:border-[#0066FF] hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center gap-3.5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0066FF]/10 text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                    <SecIcon size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 block">
                      SECTOR {sector.id < 10 ? `0${sector.id}` : sector.id}
                    </span>
                    <h3 className="font-display text-sm font-extrabold uppercase text-[#0B2545] group-hover:text-[#0066FF] transition-colors">
                      {sector.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Context Paragraphs */}
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            <p>
              Advanced welding education is receiving increased attention in India&apos;s skill-development ecosystem, including dedicated initiatives around advanced welding technologies.
            </p>
            <p>
              For learners, developing multiple welding processes and advanced skills can create a stronger foundation for pursuing different industrial career paths.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         7. SKILL EVOLUTION & YOUR SKILL PROGRESSION PATHWAY
         ========================================================= */}
      <section className="py-16 bg-[#0B2545] text-white relative overflow-hidden border-b border-slate-800">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        />

        <div className="container-site max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-2">
              <TrendingUp size={16} /> Skill Progression Pathway
            </div>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
              BUILD SKILLS THAT <span className="text-weld-blue">INDUSTRY NEEDS</span>
            </h2>
            <h3 className="mt-2 font-display text-lg font-bold text-[#38BDF8]">
              From Beginner Welder to Skilled Welding Professional
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed text-justify max-w-4xl mx-auto bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
            <p>
              The welding industry is evolving. Modern welding professionals can benefit from skills beyond basic arc operation — including <strong>welding positions</strong>, <strong>process selection</strong>, <strong>weld quality</strong>, <strong>inspection</strong>, <strong>technical drawings</strong>, <strong>safety</strong> and <strong>advanced welding technologies</strong>.
            </p>
            <p>
              Government skill-development initiatives are also increasingly incorporating modern tools, equipment and emerging technologies into vocational training.
            </p>
          </div>

          {/* Interactive 6-Step Progression Pathway Grid */}
          <div className="mt-10">
            <h4 className="font-display text-base font-extrabold uppercase tracking-wide text-center text-[#38BDF8] mb-6">
              Your Skill Progression Pathway
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {PROGRESSION_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="relative rounded-2xl border border-slate-800 bg-slate-950 p-4 text-center hover:border-[#0066FF] hover:bg-slate-900 transition-all group"
                >
                  <span className="inline-block font-display text-xs font-extrabold text-[#0066FF] bg-[#0066FF]/20 px-2 py-0.5 rounded">
                    Step {s.step}
                  </span>
                  <h5 className="mt-2 font-display text-xs font-bold uppercase text-white group-hover:text-cyan-300">
                    {s.title}
                  </h5>
                  <p className="mt-1 text-[10px] text-slate-400">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs font-mono font-bold text-[#38BDF8] tracking-widest uppercase">
                Basic Welding → Process Specialization → 3G/6G → Pipe/Structural Welding → Inspection &amp; Quality → Advanced Skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         8. OUR TRAINING FOCUS (12-CARD GRID)
         ========================================================= */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/50 bg-[#0066FF]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#38BDF8]">
              <Flame size={14} /> Comprehensive Skill Coverage
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
              OUR TRAINING <span className="text-weld-blue">FOCUS</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Mastering core processes, structural fabrication, high-pressure piping, non-destructive testing and welder qualification standards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TRAINING_FOCUS_ITEMS.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-xl hover:border-[#0066FF] hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0066FF]/20 text-[#38BDF8] border border-[#0066FF]/40 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                      <IconComp size={20} />
                    </div>
                    <h3 className="font-display text-base font-extrabold uppercase tracking-wide text-white group-hover:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
         9. WHY CHOOSE NATIONAL INSTITUTE OF WELDING? (6 PILLARS)
         ========================================================= */}
      <section className="py-16 bg-slate-50 text-slate-900">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0066FF]">
              <Wrench size={14} /> Distinctive Strengths
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-4xl">
              WHY CHOOSE NATIONAL INSTITUTE OF <span className="text-[#0066FF]">WELDING?</span>
            </h2>
            <p className="mt-2 font-display text-lg font-bold text-[#0B2545]">
              Training Designed Around Real Welding Skills
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl hover:shadow-2xl hover:border-[#0066FF] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-[#0066FF]/40 group-hover:text-[#0066FF] transition-colors">
                    {pillar.num}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-[#0066FF]" />
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold uppercase tracking-wide text-[#0B2545]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         10. MEET OUR LEADERSHIP TEAM (3 EXECUTIVE DIRECTORS)
         ========================================================= */}
      <section className="py-16 bg-white text-slate-900 border-t border-slate-200">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0066FF]">
              <Users size={14} /> Leadership &amp; Vision
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-4xl">
              MEET OUR <span className="text-[#0066FF]">LEADERSHIP TEAM</span>
            </h2>
            <p className="mt-2 font-display text-lg font-bold text-[#0B2545]">
              Experienced Leadership. Industry-Focused Expertise.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto text-justify">
              Our leadership team brings experience across welding, safety, NDT, quality management, strategic management, LEAN, TPM, HR and competency development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {LEADERSHIP_TEAM.map((director) => (
              <div
                key={director.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-xl hover:shadow-2xl hover:border-[#0066FF] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Director Avatar Badge */}
                  <div className="flex items-center gap-4">
                    <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${director.color} text-white font-display text-xl font-extrabold shadow-md`}>
                      {director.initials}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-extrabold uppercase text-[#0B2545]">
                        {director.name}
                      </h3>
                      <span className="inline-block rounded-md bg-[#0066FF]/10 text-[#0066FF] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                        {director.title}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Areas of Expertise:
                    </span>
                    <p className="font-display text-xs font-extrabold text-[#0066FF]">
                      {director.expertise}
                    </p>
                  </div>

                  <div className="mt-3">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Profile:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                      {director.profile}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">NIW Board Member</span>
                  <ShieldCheck size={16} className="text-[#0066FF]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         11. COURSES & TRAINING PROGRAM SUMMARY GRID (SEPARATED FROM FOOTER)
         ========================================================= */}
      <section className="py-20 bg-[#F4F7FB] text-slate-900 relative">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0066FF]">
              <GraduationCap size={16} /> Certified Programs
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-4xl">
              COURSES &amp; <span className="text-[#0066FF]">TRAINING</span>
            </h2>
            <p className="mt-2 font-display text-lg font-bold text-[#0B2545]">
              Explore Our Welding Training Programs
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {EXPLORE_PROGRAMS.map((prog) => {
              const ProgIcon = prog.icon;
              return (
                <div
                  key={prog.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-2xl hover:border-[#0066FF] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#EBF3FE] text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors shadow-sm">
                        <ProgIcon size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-extrabold text-[#0066FF] bg-[#0066FF]/10 border border-[#0066FF]/20 px-2.5 py-1 rounded-full">
                        {prog.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-base font-extrabold uppercase tracking-wide text-[#0B2545] group-hover:text-[#0066FF] transition-colors">
                      {prog.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-[#0066FF] hover:text-[#0044B3] transition-colors"
                    >
                      Explore Courses <ArrowRightCircle size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* High Impact Standalone Banner Container */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-[#0B2545] via-slate-900 to-[#0B2545] p-8 shadow-2xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                  Ready to upgrade your welding skills?
                </span>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-extrabold uppercase text-white">
                  Join Our Next Batch of Hands-On Welding Training
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Master ARC, TIG, MIG, 3G, 6G Pipe Welding &amp; Inspection with certified instructors.
                </p>
              </div>

              <Link
                href="/courses"
                className="btn-orange shrink-0 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-xl shadow-2xl hover:scale-105 transition-transform"
              >
                View Full Course Catalog &amp; Schedules <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Explicit Visual Separator Line Above Footer */}
        <div aria-hidden="true" className="mt-20 h-2 w-full bg-gradient-to-r from-[#0066FF] via-amber-500 to-[#0066FF]" />
      </section>
    </>
  );
}
