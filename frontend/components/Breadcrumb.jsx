import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="container-site py-3">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-niw-ink">
        <li><Link href="/" className="flex items-center gap-2 hover:text-niw-orange"><Home size={13} /> Home</Link></li>
        {items.map(([label, href], i) => (
          <li key={label} className="flex items-center gap-2">
            <ChevronRight size={12} className="text-niw-slate" />
            {href && i < items.length - 1
              ? <Link href={href} className="hover:text-niw-orange">{label}</Link>
              : <span aria-current="page">{label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
