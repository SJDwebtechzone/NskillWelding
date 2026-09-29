import { ArrowRight, Calendar, Play } from 'lucide-react';
import ArcImage from './ArcImage';
import { formatDate } from '@/lib/api';
import { site } from '@/lib/site';

export default function VideoGrid({ videos }) {
  return (
    <section id="videos" aria-labelledby="vid-heading" className="scroll-mt-24">
      <div className="flex items-end justify-between">
        <h2 id="vid-heading" className="section-title">Videos &amp; Tutorials</h2>
        <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="link-arrow">View all videos <ArrowRight size={14} /></a>
      </div>
      <ul className="mt-4 grid gap-5 sm:grid-cols-3">
        {videos.map((v, i) => {
          const href = v.youtube_id ? `https://www.youtube.com/watch?v=${v.youtube_id}` : site.social.youtube;
          const thumb = v.thumbnail_url || (v.youtube_id ? `https://i.ytimg.com/vi/${v.youtube_id}/hqdefault.jpg` : null);
          return (
            <li key={v.id}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
                <ArcImage src={thumb} variant={i + 1} className="aspect-video">
                  <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/90 bg-black/35 text-white transition-colors group-hover:bg-niw-orange group-hover:border-niw-orange">
                    <Play size={17} fill="currentColor" />
                  </span>
                  <span className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold text-white">{v.duration}</span>
                  <span className="sr-only">Watch video</span>
                </ArcImage>
                <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-niw-ink group-hover:text-niw-orange">{v.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-niw-slate">{v.description}</p>
                <p className="mt-3 flex items-center gap-1.5 text-[11px] text-niw-slate"><Calendar size={12} /> {formatDate(v.published_at)}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
