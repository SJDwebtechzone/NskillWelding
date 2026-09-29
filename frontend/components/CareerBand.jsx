import Link from 'next/link';
import { images, bgUrl } from '@/lib/site';
import { ArrowRight, Flame, Cylinder, Construction, HardHat, FileSearch } from 'lucide-react';

const roles = [[Flame, 'TIG Welder'], [Cylinder, '6G Pipe Welder'], [Construction, 'Structural Welder'], [HardHat, 'Welding Supervisor'], [FileSearch, 'Welding Inspector']];
const regions = ['India', 'Middle East', 'Europe', 'Asia Pacific', 'Africa'];

export default function CareerBand() {
  return (
    <section aria-labelledby="career-heading" className="relative isolate overflow-hidden bg-niw-ink text-white">
      {/* Photo: set images.careerBand in lib/site.js */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-right"
           style={{ backgroundImage: `linear-gradient(90deg, #0E1116 45%, rgba(14,17,22,.55) 75%, rgba(14,17,22,.2)), ${bgUrl(images.careerBand)}radial-gradient(circle at 88% 70%, rgba(242,98,31,.45) 0 3%, rgba(242,98,31,.15) 18%, transparent 40%)` }} />
      <div className="container-site grid gap-8 py-10 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div>
          <h2 id="career-heading" className="font-display text-3xl font-bold uppercase tracking-wide">
            Build a successful <span className="text-niw-orange">career</span>
          </h2>
          <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-white/80">
            Welding skills open doors to exciting career opportunities in India and around the world.
          </p>
          <Link href="/career" className="btn-orange mt-5 px-4 py-2 text-sm">Explore career path <ArrowRight size={16} /></Link>
        </div>
        <div className="lg:max-w-2xl">
          <ul className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {roles.map(([Icon, label]) => (
              <li key={label} className="flex flex-col items-center justify-center gap-2 border border-white/20 bg-white/5 px-2 py-4 text-center">
                <Icon size={34} strokeWidth={1.3} className="text-niw-orange" />
                <span className="font-display text-[13px] font-semibold uppercase leading-tight tracking-wide">{label}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-wide text-white/85" aria-label="Where our students work">
            {regions.map((r, i) => (
              <li key={r} className="flex items-center gap-5">{i > 0 && <span className="h-3 w-px bg-niw-orange" aria-hidden="true" />}{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
