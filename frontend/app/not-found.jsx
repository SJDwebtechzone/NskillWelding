import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <div className="container-site py-20 text-center">
      <p className="font-display text-6xl font-bold text-niw-orange">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide">Page not found</h1>
      <p className="mt-3 text-sm text-niw-slate">The link may be old, or the page has moved.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-orange">Go to homepage</Link>
        <Link href="/courses" className="inline-flex items-center border border-niw-line px-5 py-3 font-display font-semibold uppercase tracking-wide hover:border-niw-orange hover:text-niw-orange">View courses</Link>
      </div>
    </div>
  );
}
