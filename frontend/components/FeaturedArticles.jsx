import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ArticleCard from './ArticleCard';

export default function FeaturedArticles({ articles }) {
  return (
    <section aria-labelledby="featured-heading" className="container-site pt-10">
      <div className="flex items-end justify-between gap-4">
        <h2 id="featured-heading" className="section-title">Featured Articles</h2>
        <Link href="/knowledge/articles" className="link-arrow">View all articles <ArrowRight size={14} /></Link>
      </div>
      <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((a, i) => <li key={a.slug}><ArticleCard article={a} index={i} /></li>)}
      </ul>
    </section>
  );
}
