import { ClipboardList, Presentation, HardHat, ClipboardCheck, BadgeCheck, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

// A real sequence, so numbered steps are appropriate here
const steps = [
  [ClipboardList, 'Assess', 'Skill assessment & career counselling'],
  [Presentation, 'Train', 'Theory & practical training'],
  [HardHat, 'Practice', 'Individual hands-on practice'],
  [ClipboardCheck, 'Assess', 'Practical & theory evaluation'],
  [BadgeCheck, 'Qualify', 'Certification & career assistance'],
];

export default function TrainingProcess() {
  return (
    <section aria-labelledby="process-heading" className="bg-white py-10">
      <div className="container-site">
        <div id="process-heading"><SectionHeading lead="Our" accent="Training" tail="Process" /></div>
        <ol className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:items-stretch lg:justify-center lg:gap-0">
          {steps.map(([Icon, title, text], i) => (
            <li key={i} className="flex items-center lg:flex-1">
              <div className="flex h-full w-full flex-col items-center border border-niw-line bg-white px-3 py-5 text-center shadow-card">
                <Icon size={34} strokeWidth={1.3} className="text-niw-ink" />
                <p className="mt-3 flex items-center gap-2">
                  <span className="bg-niw-orange px-1.5 py-0.5 font-display text-lg font-bold leading-none text-white">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-xl font-bold uppercase tracking-wide">{title}</span>
                </p>
                <p className="mt-2 text-[12px] leading-snug text-niw-slate">{text}</p>
              </div>
              {i < steps.length - 1 && <ArrowRight aria-hidden="true" size={20} className="mx-3 hidden shrink-0 text-niw-orange lg:block" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
