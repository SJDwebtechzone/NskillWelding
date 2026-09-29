import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { getArticle, formatDate } from '@/lib/api';
import { site } from '@/lib/site';

export async function generateMetadata({ params }) {
  const a = await getArticle(params.slug);
  if (!a) return { title: 'Article not found' };
  return { title: a.title, description: a.excerpt, alternates: { canonical: `/knowledge/${a.slug}` } };
}

export default async function ArticlePage({ params }) {
  const a = await getArticle(params.slug);
  if (!a) notFound();

  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.excerpt,
    datePublished: a.published_at, publisher: { '@type': 'EducationalOrganization', name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-niw-ink py-12 text-white">
        <div className="container-site max-w-3xl">
          <Link href={`/knowledge/articles?category=${a.category_slug}`} className="bg-niw-orange px-2 py-1 text-[11px] font-bold uppercase tracking-wide">{a.category_name}</Link>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">{a.title}</h1>
          <p className="mt-4 flex gap-5 text-xs text-white/75">
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {formatDate(a.published_at)}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {a.read_minutes} min read</span>
          </p>
        </div>
      </section>
      <Breadcrumb items={[['Knowledge Center', '/knowledge'], [a.title]]} />
      <article className="container-site max-w-3xl pb-16">
        <p className="text-lg leading-relaxed text-niw-ink">{a.excerpt}</p>
        {(a.content || '').split(/\n\s*\n/).map((p, i) => (
          <p key={i} className="mt-5 text-[15px] leading-[1.8] text-niw-steel">{p}</p>
        ))}
        <div className="mt-10 flex flex-col gap-4 border-l-4 border-niw-orange bg-niw-mist p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium">Want hands-on training in this? Talk to an NIW trainer about the right course.</p>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-orange shrink-0 text-sm">Chat on WhatsApp</a>
        </div>
      </article>
    </>
  );
}
