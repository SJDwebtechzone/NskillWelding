import Link from 'next/link';
import { images, bgUrl } from '@/lib/site';
import { Home, ChevronRight } from 'lucide-react';
import { Divider } from './SectionHeading';

/** Inner-page hero: title, orange subtitle, text, icon points, breadcrumb */
export default function PageHero({ title, subtitle, text, points = [], crumbs = [], image = images.trainingHero, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-niw-ink text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[position:70%_center]"
           style={{ backgroundImage: `linear-gradient(90deg, #0E1116 0%, rgba(14,17,22,.9) 38%, rgba(14,17,22,.3) 70%, rgba(14,17,22,.15)), ${bgUrl(image)}radial-gradient(circle at 70% 70%, rgba(200,225,255,.9) 0 1.5%, rgba(70,140,255,.5) 6%, rgba(30,60,160,.3) 20%, transparent 40%), linear-gradient(180deg,#141a22,#0e1116)` }} />
      <div className="container-site py-12 lg:py-16">
        {children}
        <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl">{title}</h1>
        {subtitle && <p className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-niw-orange sm:text-3xl">{subtitle}</p>}
        {!subtitle && <Divider className="mt-4" />}
        {text && <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/90">{text}</p>}
        {points.length > 0 && (
          <ul className="mt-6 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {points.map(([Icon, label]) => (
              <li key={label} className="flex items-center gap-2 text-[12px] leading-tight">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-niw-orange/70 text-niw-orange"><Icon size={14} /></span>
                {label}
              </li>
            ))}
          </ul>
        )}
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/85">
              <li><Link href="/" className="flex items-center gap-1.5 hover:text-niw-orange"><Home size={12} /> Home</Link></li>
              {crumbs.map(([label, href], i) => (
                <li key={label} className="flex items-center gap-2">
                  <ChevronRight size={12} className="text-white/50" />
                  {href && i < crumbs.length - 1 ? <Link href={href} className="hover:text-niw-orange">{label}</Link> : <span aria-current="page">{label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
