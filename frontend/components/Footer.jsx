import Link from 'next/link';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Logo from './Logo';
import { SocialLinks } from './BrandIcons';
import { site, trainingLinks, serviceLinks } from '@/lib/site';

const quick = [['About Us', '/about'], ['Facilities', '/facilities'], ['Career', '/career'], ['Knowledge Center', '/knowledge'], ['Contact Us', '/contact'], ['FAQ', '/knowledge#faq']];

function Col({ title, links }) {
  return (
    <div>
      <h2 className="font-display text-base font-semibold uppercase tracking-wide">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map(([label, href]) => (
          <li key={href}><Link href={href} className="text-[13px] text-white/75 hover:text-niw-orange">{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-niw-ink pb-16 text-white lg:pb-0">
      <div className="container-site grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1.1fr_1.5fr] lg:gap-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/75">
            Providing world-class welding training, certification and industrial skill development services.
          </p>
          <div className="mt-5"><SocialLinks social={site.social} size="md" /></div>
        </div>
        <Col title="Quick Links" links={quick} />
        <Col title="Welding Training" links={trainingLinks} />
        <Col title="Industrial Services" links={serviceLinks} />
        <div>
          <h2 className="font-display text-base font-semibold uppercase tracking-wide">Contact Us</h2>
          <address className="mt-3 space-y-3 text-[13px] not-italic text-white/75">
            <p className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-niw-orange" /><span>{site.address.map((l) => <span key={l} className="block">{l}</span>)}</span></p>
            <p className="flex gap-3"><Phone size={16} className="shrink-0 text-niw-orange" /><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></p>
            <p className="flex gap-3"><Mail size={16} className="shrink-0 text-niw-orange" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
            <p className="flex gap-3"><Globe size={16} className="shrink-0 text-niw-orange" /><a href={`https://${site.website}`} className="hover:text-white">{site.website}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} National Institute of Welding. All rights reserved.</p>
          <p className="flex gap-6"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></p>
        </div>
      </div>
    </footer>
  );
}
