import Link from 'next/link';
import { ArrowRight, Flame, Cable, Zap, Cylinder, Construction, ShieldCheck, Ruler } from 'lucide-react';
import ArcImage from './ArcImage';

export const courseIcons = { torch: Flame, wire: Cable, zap: Zap, pipe: Cylinder, beam: Construction, shield: ShieldCheck, ruler: Ruler };

/** size 'md' (home/training grids) | 'sm' (related courses) */
export default function CourseCard({ course, index = 0, showDuration = false, cta = 'View course', size = 'md' }) {
  const Icon = courseIcons[course.icon] || Flame;
  const sm = size === 'sm';
  return (
    <Link href={`/courses/${course.slug}`} className={`group flex h-full bg-white shadow-card ${sm ? 'flex-row sm:flex-col' : 'flex-col'}`}>
      <ArcImage src={course.image_url} alt="" variant={index} className={sm ? 'aspect-[4/3] w-28 shrink-0 sm:aspect-[16/10] sm:w-auto' : 'aspect-[16/8]'} />
      <div className={`relative flex flex-1 flex-col ${sm ? 'justify-center px-3 py-3' : 'px-3.5 pb-4 pt-8 sm:px-5 sm:pb-5 sm:pt-9'}`}>
        {!sm && (
          <span className="absolute -top-6 left-3.5 grid h-12 w-12 place-items-center rounded-full bg-niw-orange text-white ring-4 ring-white sm:left-5">
            <Icon size={22} strokeWidth={1.8} />
          </span>
        )}
        <h3 className={`font-semibold uppercase tracking-wide text-niw-ink group-hover:text-niw-orange ${sm ? 'text-[12px]' : 'text-[13px] sm:text-[15px]'}`}>{course.title}</h3>
        {showDuration && course.duration && <p className="mt-1 text-[11px] text-niw-slate">Duration: {course.duration}</p>}
        {!sm && <p className="mt-2 flex-1 text-[12px] leading-relaxed text-niw-slate sm:text-[13px]">{course.short_desc}</p>}
        <span className={`inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-niw-ink group-hover:text-niw-orange ${sm ? 'mt-2 text-[10px]' : 'mt-4 text-xs'}`}>
          {cta} <ArrowRight size={sm ? 12 : 14} className="text-niw-orange" />
        </span>
      </div>
    </Link>
  );
}
