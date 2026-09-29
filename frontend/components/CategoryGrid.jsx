import Link from 'next/link';
import { Flame, Cylinder, ShieldCheck, BookOpen, HardHat, TrendingUp, MonitorPlay } from 'lucide-react';
import SectionHeading from './SectionHeading';

const icons = { welder: Flame, pipe: Cylinder, shield: ShieldCheck, book: BookOpen, hardhat: HardHat, chart: TrendingUp, play: MonitorPlay };

export default function CategoryGrid({ categories }) {
  return (
    <section aria-labelledby="cat-heading" className="container-site pt-4">
      <div id="cat-heading"><SectionHeading lead="Explore" accent="Knowledge" tail="by Category" /></div>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {categories.map((c) => {
          const Icon = icons[c.icon] || BookOpen;
          const href = c.count_type === 'videos' ? '#videos' : `/knowledge/articles?category=${c.slug}`;
          const unit = c.count_type === 'videos' ? 'Videos' : c.item_count === 1 ? 'Article' : 'Articles';
          return (
            <li key={c.slug}>
              <Link href={href}
                    className="group flex h-full flex-col items-center border border-niw-line bg-white px-3 pb-4 pt-5 text-center shadow-card transition-colors hover:border-niw-orange">
                <Icon size={40} strokeWidth={1.3} className="text-niw-ink transition-colors group-hover:text-niw-orange" />
                <span className="mt-3 text-[13px] font-semibold text-niw-ink">{c.name}</span>
                <span className="mt-1.5 text-[11px] text-niw-slate">{c.item_count}{c.count_type === 'videos' ? '+' : ''} {unit}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
