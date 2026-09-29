import Link from 'next/link';
import { images, bgUrl } from '@/lib/site';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Award, Presentation, GraduationCap, Factory } from 'lucide-react';
import ArcImage from './ArcImage';

const icons = { award: Award, trainer: Presentation, students: GraduationCap, factory: Factory };
const reasons = [
  '100% Practical & Hands-on Training', 'Industry Experienced & Certified Trainers', 'Advanced Welding Equipment & Workshop',
  'Individual Practice on Workstations', 'Certification & Qualification Support', 'Placement Assistance & Career Guidance',
];
const photos = [['Practical Training', images.whyPractical], ['Theory Classes', images.whyTheory], ['Individual Practice', images.whyPractice]];

export default function WhyChooseDetailed({ stats }) {
  return (
    <section aria-labelledby="whyd-heading" className="bg-niw-ink text-white">
      <div className="container-site grid gap-10 py-12 lg:grid-cols-[1fr_1.9fr]">
        <div>
          <h2 id="whyd-heading" className="font-display text-3xl font-bold uppercase tracking-wide">Why choose <span className="text-niw-orange">NIW?</span></h2>
          <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-white/80">We are committed to providing world-class training with practical exposure and career support.</p>
          <ul className="mt-5 space-y-2.5">
            {reasons.map((r) => (
              <li key={r} className="flex items-center gap-2.5 text-[13px]"><CheckCircle2 size={16} className="shrink-0 text-niw-orange" /> {r}</li>
            ))}
          </ul>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 border border-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-niw-ink">
            About us <ArrowRight size={14} />
          </Link>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {stats.map((s) => {
              const Icon = icons[s.icon] || Award;
              return (
                <li key={s.label} className="flex flex-col items-center text-center sm:border-l sm:border-white/15 sm:first:border-l-0">
                  <Icon size={32} strokeWidth={1.4} className="text-niw-orange" />
                  <span className="mt-2 font-display text-4xl font-bold leading-none">{s.value}</span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-niw-orange">{s.label}</span>
                  <span className="mt-1 text-[12px] text-white/70">{s.sub_label}</span>
                </li>
              );
            })}
          </ul>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {photos.map(([label, src], i) => (
              <li key={label}>
                <ArcImage variant={i} className="aspect-[4/3]" src={src} alt={label}>
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 pb-2 pt-8 text-center font-display text-sm font-semibold uppercase tracking-wide text-niw-orange">{label}</span>
                </ArcImage>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
