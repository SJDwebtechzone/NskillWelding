'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, PenSquare } from 'lucide-react';
import { site } from '@/lib/site';

// Fixed Call / WhatsApp / Enquire bar on phones and tablets
export default function MobileActionBar() {
  const pathname = usePathname() || '/';
  const enquireHref = pathname.startsWith('/courses/') ? '#enquire' : '/#enquire';
  const item = 'flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-semibold uppercase tracking-wide';
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-niw-ink text-white lg:hidden">
      <a href={site.phoneHref} className={item}><Phone size={18} /> Call</a>
      <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={`${item} bg-[#1FA855]`}><MessageCircle size={18} /> WhatsApp</a>
      <Link href={enquireHref} className={`${item} bg-niw-orange`}><PenSquare size={18} /> Enquire</Link>
    </nav>
  );
}
