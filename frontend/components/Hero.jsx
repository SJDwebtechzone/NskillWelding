import { ClipboardCheck, Cog, RefreshCw, BadgeCheck } from 'lucide-react';
import { images, bgUrl } from '@/lib/site';
import SearchBar from './SearchBar';
import { Divider } from './SectionHeading';

const points = [
  [ClipboardCheck, 'Expert Content', 'By Welding Professionals'],
  [Cog, 'Practical Knowledge', 'Industry Focused'],
  [RefreshCw, 'Regular Updates', 'Latest Industry Trends'],
  [BadgeCheck, 'All Levels', 'Beginner to Advanced'],
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-niw-ink text-white">
      {/* Photo: set images.knowledgeHero in lib/site.js; the arc glow shows until then */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[position:70%_center]"
           style={{ backgroundImage:
             `linear-gradient(90deg, #0E1116 0%, rgba(14,17,22,.92) 38%, rgba(14,17,22,.35) 70%, rgba(14,17,22,.2) 100%), ${bgUrl(images.knowledgeHero)}radial-gradient(circle at 72% 62%, rgba(185,215,255,.9) 0 1.5%, rgba(60,130,255,.5) 6%, rgba(20,50,130,.35) 20%, transparent 42%), linear-gradient(180deg,#141a22,#0e1116)` }} />

      <div className="container-site pb-10 pt-12 sm:pt-16 lg:pb-12 lg:pt-20">
        <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
          Knowledge <span className="text-niw-orange">Center</span>
        </h1>
        <Divider className="mt-4" />
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/90 sm:text-base">
          Explore expert insights, technical resources and industry knowledge to enhance your welding skills and advance your career.
        </p>
        <div className="mt-7"><SearchBar /></div>

        <ul className="mt-12 grid grid-cols-2 gap-y-6 lg:mt-16 lg:max-w-4xl lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {points.map(([Icon, title, sub]) => (
            <li key={title} className="flex items-center gap-3 lg:px-5 lg:first:pl-0">
              <Icon size={30} strokeWidth={1.6} className="shrink-0 text-niw-orange" />
              <span className="leading-tight">
                <span className="block text-[13px] lg:whitespace-nowrap font-semibold">{title}</span>
                <span className="block text-[11px] lg:whitespace-nowrap text-white/75">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
