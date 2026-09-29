import Link from 'next/link';
import { Calendar, Clock, Play } from 'lucide-react';
import ArcImage from './ArcImage';
import { formatDate } from '@/lib/api';

export default function ArticleCard({ article, index = 0 }) {
  return (
    <article className="group flex h-full flex-col border border-niw-line bg-white shadow-card">
      <Link href={`/knowledge/${article.slug}`} className="flex h-full flex-col">
        <ArcImage src={article.image_url} alt="" variant={index} className="aspect-[16/8.5]">
          {article.has_video && (
            <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/90 bg-black/30 text-white">
              <Play size={16} fill="currentColor" />
            </span>
          )}
          <span className="absolute bottom-0 left-2 bg-niw-orange px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
            {article.category_name}
          </span>
        </ArcImage>
        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-[15px] font-semibold leading-snug text-niw-ink group-hover:text-niw-orange">{article.title}</h3>
          <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-niw-slate">{article.excerpt}</p>
          <p className="mt-4 flex items-center justify-between text-[11px] text-niw-slate">
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {formatDate(article.published_at)}</span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> {article.read_minutes} min read</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
