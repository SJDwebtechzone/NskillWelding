import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container-site py-20 text-center">
      <h1 className="font-display text-4xl font-bold uppercase">Course not found</h1>
      <p className="mt-3 text-sm text-niw-slate">This course may have been renamed. See all our welding courses.</p>
      <Link href="/courses" className="btn-orange mt-6">View all courses</Link>
    </div>
  );
}
