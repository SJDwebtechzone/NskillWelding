import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container-site py-20 text-center">
      <h1 className="font-display text-4xl font-bold uppercase">Article not found</h1>
      <p className="mt-3 text-sm text-niw-slate">The link may be old or the article was renamed.</p>
      <Link href="/knowledge/articles" className="btn-orange mt-6">Browse all articles</Link>
    </div>
  );
}
