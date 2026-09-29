import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/lib/api';

export const metadata = { title: 'All Welding Articles', alternates: { canonical: '/knowledge/articles' } };

export default async function ArticlesPage({ searchParams }) {
  const category = searchParams?.category || '';
  const search = searchParams?.search || '';
  const { articles, categories } = await getArticles({ category, search });
  const articleCats = categories.filter((c) => c.count_type !== 'videos');
  const current = articleCats.find((c) => c.slug === category);

  const chip = (active) =>
    `border px-3 py-1.5 text-xs font-medium ${active ? 'border-niw-orange bg-niw-orange text-white' : 'border-niw-line bg-white hover:border-niw-orange'}`;

  return (
    <>
      <section className="bg-niw-ink py-10 text-white">
        <div className="container-site">
          <h1 className="font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">{current ? current.name : 'All Articles'}</h1>
          {search && <p className="mt-2 text-sm text-white/80">Results for &ldquo;{search}&rdquo;</p>}
        </div>
      </section>
      <Breadcrumb items={[['Knowledge Center', '/knowledge'], ['Articles']]} />
      <div className="container-site pb-16">
        <ul className="flex flex-wrap gap-2">
          <li><Link href="/knowledge/articles" className={chip(!category)}>All</Link></li>
          {articleCats.map((c) => (
            <li key={c.slug}><Link href={`/knowledge/articles?category=${c.slug}`} className={chip(c.slug === category)}>{c.name}</Link></li>
          ))}
        </ul>
        {articles.length ? (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a, i) => <li key={a.slug}><ArticleCard article={a} index={i} /></li>)}
          </ul>
        ) : (
          <p className="mt-8 text-sm text-niw-slate">No articles match this filter yet. <Link href="/knowledge/articles" className="text-niw-orange underline">Show all articles</Link>.</p>
        )}
      </div>
    </>
  );
}
