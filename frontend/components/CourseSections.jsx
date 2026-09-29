import Link from 'next/link';
import {
  Home, ChevronRight, CheckCircle2, CalendarDays, Signal, BookOpen, MapPin, Play, ArrowRight,
  Flame, Award, Users, Briefcase, Globe2, Hand, Cog, BadgeCheck,
  Fuel, Zap, Building2, Ship, Factory, FlaskConical, Wrench, Car, Pill, TrafficCone, Anchor, Hammer, Milk,
} from 'lucide-react';
import ArcImage from './ArcImage';
import { courseIcons } from './CourseCard';
import { site, bgUrl } from '@/lib/site';

// "TIG Welding" → TIG Welding + Course; "Stainless Steel" → Stainless Steel Welding + Course; "Fitter Training" → Fitter Training + Course
export const accentTitle = (title) => {
  const main = /welding|training/i.test(title) ? title : `${title} Welding`;
  return { main, suffix: /course$/i.test(main) ? '' : 'Course' };
};

function H2({ lead, accent }) {
  return <h2 className="font-display text-2xl font-bold uppercase tracking-wide">{lead} <span className="text-niw-orange">{accent}</span></h2>;
}

export function CourseHero({ course }) {
  const { main, suffix } = accentTitle(course.title);
  const points = [[Hand, '100% Practical Training'], [Users, 'Experienced Trainers'], [Award, 'Certification Support'], [Briefcase, 'Career & Placement Assistance']];
  return (
    <section className="relative isolate overflow-hidden bg-niw-ink text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[position:75%_center]"
           style={{ backgroundImage: `linear-gradient(90deg, #0E1116 0%, rgba(14,17,22,.9) 40%, rgba(14,17,22,.3) 72%, rgba(14,17,22,.15)), ${bgUrl(course.hero_image_url)}radial-gradient(circle at 72% 55%, rgba(210,225,255,.9) 0 1.5%, rgba(120,90,255,.45) 7%, rgba(40,40,140,.3) 20%, transparent 42%), linear-gradient(180deg,#141a22,#0e1116)` }} />
      <div className="container-site relative py-8 lg:py-10">
        <p aria-hidden="true" className="pointer-events-none absolute right-6 top-10 hidden -rotate-6 text-right font-script text-[2.6rem] font-semibold leading-[0.9] text-white/95 lg:block">
          Better<br />Skills<br />Bigger<br />Opportunities
          <svg viewBox="0 0 200 24" className="ml-auto mt-1 block w-44 text-niw-orange" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M4 18 C 60 4, 120 2, 196 10" /></svg>
        </p>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-white/85">
            <li><Link href="/" className="flex items-center gap-1.5 hover:text-niw-orange"><Home size={12} /> Home</Link></li>
            <li className="flex items-center gap-2"><ChevronRight size={12} className="text-white/50" /><Link href="/courses" className="hover:text-niw-orange">Welding Training</Link></li>
            <li className="flex items-center gap-2"><ChevronRight size={12} className="text-white/50" /><span aria-current="page">{main} {suffix}</span></li>
          </ol>
        </nav>
        <p className="mt-6 inline-block bg-niw-orange px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide">Professional welding training</p>
        <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl">
          <span className="text-niw-orange">{main}</span> {suffix}
        </h1>
        {course.tagline && <p className="mt-3 text-lg font-medium">{course.tagline}</p>}
        <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-white/85">{course.intro || course.short_desc}</p>
        <ul className="mt-6 grid grid-cols-2 gap-y-3 sm:flex sm:flex-wrap">
          {points.map(([Icon, label], i) => (
            <li key={label} className={`flex items-center gap-2 pr-5 text-[12px] leading-tight ${i ? 'sm:border-l sm:border-white/20 sm:pl-5' : ''}`}>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-niw-orange/70 text-niw-orange"><Icon size={15} /></span>
              <span className="max-w-[7.5rem]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Overview({ course }) {
  const facts = [[CalendarDays, 'Duration', course.duration], [Signal, 'Level', course.level], [BookOpen, 'Mode', course.mode], [MapPin, 'Location', course.location]];
  return (
    <section aria-labelledby="ov-heading" className="grid gap-6 md:grid-cols-[1fr_1fr]">
      <div>
        <div id="ov-heading"><H2 lead="Course" accent="Overview" /></div>
        <p className="mt-3 text-[13px] leading-relaxed text-niw-steel">{course.overview}</p>
      </div>
      <dl className="grid grid-cols-2 border border-niw-line bg-white">
        {facts.map(([Icon, label, value], i) => (
          <div key={label} className={`flex items-start gap-2 px-3 py-4 ${i % 2 ? 'border-l border-niw-line' : ''} ${i > 1 ? 'border-t border-niw-line' : ''}`}>
            <Icon size={20} strokeWidth={1.5} className="shrink-0 text-niw-orange" />
            <div>
              <dt className="text-[12px] font-semibold uppercase tracking-wide">{label}</dt>
              <dd className="text-[12px] text-niw-slate">{value || '—'}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function LearnAndVideo({ course }) {
  const pts = course.learn_points || [];
  const href = course.video_youtube_id ? `https://www.youtube.com/watch?v=${course.video_youtube_id}` : site.social.youtube;
  const thumb = course.video_youtube_id ? `https://i.ytimg.com/vi/${course.video_youtube_id}/hqdefault.jpg` : null;
  return (
    <section aria-labelledby="learn-heading" className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
      <div>
        <div id="learn-heading"><H2 lead="What you'll" accent="learn" /></div>
        <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {pts.map((p) => <li key={p} className="flex items-start gap-2 text-[13px]"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-niw-orange" />{p}</li>)}
        </ul>
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
        <ArcImage src={thumb} variant={2} className="aspect-video">
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-black/30 text-white group-hover:border-niw-orange group-hover:bg-niw-orange">
            <Play size={22} fill="currentColor" />
          </span>
          <span className="absolute bottom-3 left-4 text-[13px] font-semibold text-white">See our training in action</span>
        </ArcImage>
      </a>
    </section>
  );
}

export function Modules({ modules }) {
  const icons = [Flame, Cog, Hand, BadgeCheck, Award];
  return (
    <section aria-labelledby="mod-heading">
      <div id="mod-heading"><H2 lead="Course" accent="Modules" /></div>
      <ol className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 [&>li:last-child:nth-child(odd)]:col-span-2 sm:[&>li:last-child:nth-child(odd)]:col-span-1">
        {modules.map((m, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={m.title} className="bg-niw-ink p-4 text-white">
              <p className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold">{String(i + 1).padStart(2, '0')}</span>
                <Icon size={24} strokeWidth={1.4} />
              </p>
              <h3 className="mt-3 text-[12px] font-semibold uppercase tracking-wide">{m.title}</h3>
              <ul className="mt-2 space-y-1">
                {m.points.map((p) => <li key={p} className="flex items-start gap-1.5 text-[11px] text-white/80"><CheckCircle2 size={11} className="mt-0.5 shrink-0 text-niw-orange" />{p}</li>)}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function WhyTake() {
  const items = [[Hand, 'Hands-on Workshop Training'], [Cog, 'Industry Standard Equipment'], [Users, 'Learn from Certified Trainers'],
                 [Award, 'Certification & Qualification Support'], [Briefcase, 'Job Assistance & Career Guidance'], [Globe2, 'Gulf & International Opportunities']];
  return (
    <section aria-labelledby="why-take">
      <h2 id="why-take" className="font-display text-2xl font-bold uppercase tracking-wide">Why take this <span className="text-niw-orange">course?</span></h2>
      <ul className="mt-4 grid grid-cols-2 border-y border-niw-line bg-white sm:grid-cols-3 lg:grid-cols-6">
        {items.map(([Icon, label]) => (
          <li key={label} className="flex flex-col items-center gap-2 border-niw-line px-3 py-5 text-center lg:border-l lg:first:border-l-0">
            <Icon size={32} strokeWidth={1.3} className="text-niw-orange" />
            <span className="text-[12px] font-medium leading-snug">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const INDUSTRIES = {
  'oil-gas': [Fuel, 'Oil & Gas'], petrochemical: [FlaskConical, 'Petrochemical'], power: [Zap, 'Power Plants'],
  'heavy-engineering': [Cog, 'Heavy Engineering'], construction: [Building2, 'Construction'], fabrication: [Wrench, 'Fabrication'],
  shipbuilding: [Ship, 'Shipbuilding'], automotive: [Car, 'Automotive'], manufacturing: [Factory, 'Manufacturing'],
  'food-pharma': [Pill, 'Food & Pharma'], infrastructure: [TrafficCone, 'Infrastructure'], offshore: [Anchor, 'Offshore'],
  maintenance: [Hammer, 'Plant Maintenance'], dairy: [Milk, 'Dairy & Beverages'],
};
const DEFAULT_INDUSTRIES = ['oil-gas', 'petrochemical', 'power', 'heavy-engineering', 'construction', 'fabrication', 'shipbuilding', 'manufacturing'];

export function DetailsCareersIndustries({ course }) {
  const keys = course.industries?.length ? course.industries : DEFAULT_INDUSTRIES;
  const industries = keys.map((k) => INDUSTRIES[k]).filter(Boolean);
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.15fr]">
      <div>
        <H2 lead="Course" accent="Details" />
        <table className="mt-3 w-full border border-niw-line text-[12px]">
          <tbody>
            {(course.details || []).map((d) => (
              <tr key={d.label} className="border-b border-niw-line last:border-0">
                <th scope="row" className="w-[36%] bg-niw-mist px-3 py-2 text-left font-semibold">{d.label}</th>
                <td className="px-3 py-2 text-niw-steel">{d.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <H2 lead="Career" accent="Opportunities" />
        <ul className="mt-3 space-y-2">
          {(course.careers || []).map((c) => <li key={c} className="flex items-start gap-2 text-[13px]"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-niw-orange" />{c}</li>)}
        </ul>
        <Link href="/career" className="btn-orange mt-4 px-4 py-2 text-xs">Explore career path <ArrowRight size={14} /></Link>
      </div>
      <div className="md:col-span-2 lg:col-span-1 lg:border-l lg:border-niw-line lg:pl-8">
        <H2 lead="Industries" accent="we serve" />
        <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 lg:grid-cols-2">
          {industries.map(([Icon, label]) => <li key={label} className="flex items-center gap-2 text-[13px] leading-tight"><Icon size={20} strokeWidth={1.4} className="shrink-0 text-niw-steel" />{label}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function WhatsAppQuick() {
  return (
    <div className="flex items-start gap-4 border border-niw-line bg-niw-mist p-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 000-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.3c0-.1-.2-.2-.5-.3z"/></svg>
      </span>
      <div>
        <p className="text-sm font-semibold">Quick question?</p>
        <p className="text-[12px] text-niw-slate">Chat with us on WhatsApp</p>
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 border border-niw-ink px-4 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-niw-ink hover:text-white">
          Chat now <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

export { courseIcons };
