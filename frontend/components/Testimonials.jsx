import { Star } from 'lucide-react';
import ScrollRow from './ScrollRow';

function Avatar({ name, src }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" className="h-16 w-16 shrink-0 rounded-full object-cover" loading="lazy" />;
  }
  const initials = name.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).map((w) => w[0]).slice(-2).join('');
  return <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-niw-steel font-display text-xl font-bold text-white">{initials}</span>;
}

export default function Testimonials({ testimonials }) {
  if (!testimonials?.length) return null;
  return (
    <section aria-labelledby="testi-heading" className="bg-white py-10">
      <div className="container-site">
        <h2 id="testi-heading" className="section-title flex items-center justify-center gap-3">
          What our students say <span aria-hidden="true" className="h-0.5 w-10 bg-niw-orange" />
        </h2>
        <div className="mt-6">
          <ScrollRow label="testimonials" itemClass="w-[85%] sm:w-[48%] lg:w-[calc(25%-12px)]">
            {testimonials.map((t) => (
              <figure key={t.id} className="flex h-full flex-col border border-niw-line bg-white p-5 shadow-card">
                <div className="flex items-start gap-4">
                  <Avatar name={t.name} src={t.photo_url} />
                  <div>
                    <p className="flex gap-0.5 text-niw-orange" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }, (_, i) => <Star key={i} size={13} fill="currentColor" aria-hidden="true" />)}
                    </p>
                    <blockquote className="mt-2 text-[12px] leading-relaxed text-niw-slate">{t.quote}</blockquote>
                  </div>
                </div>
                <figcaption className="mt-4">
                  <span className="block text-[13px] font-semibold">{t.name}</span>
                  <span className="block text-[12px] text-niw-slate">{t.course}</span>
                </figcaption>
              </figure>
            ))}
          </ScrollRow>
        </div>
      </div>
    </section>
  );
}
