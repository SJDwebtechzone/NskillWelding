'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { SocialLinks } from './BrandIcons';
import { mainNav, site } from '@/lib/site';

export default function Header() {
  const pathname = usePathname() || '/';
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const enquireHref = pathname.startsWith('/courses/') ? '#enquire' : '/#enquire';
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  return (
    <header className="relative z-40 w-full">
      {/* Top strip */}
      <div className="border-b border-slate-200 bg-white text-slate-700 w-full">
        <div className="w-full flex h-8 items-center justify-between text-[11px] px-3 sm:px-6 lg:px-10">
          <p className="flex items-center gap-1.5 font-semibold text-slate-700 truncate">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EBF3FE] text-[#0066FF]">
              <Phone size={10} />
            </span>
            <span className="truncate">India&apos;s Leading Welding Training &amp; Certification Institute</span>
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <a href={site.phoneHref} className="hidden sm:flex items-center gap-1 hover:text-[#0066FF] transition-colors font-display font-bold tracking-wider text-xs text-slate-800">
              <Phone size={12} className="text-[#0066FF]" /> {site.phone}
            </a>
            <div className="hidden items-center gap-3 sm:flex">
              <span>Follow Us:</span>
              <SocialLinks social={site.social} />
            </div>
          </div>
        </div>
      </div>

      {/* Main header bar (Full Width - Extreme Left to Right) */}
      <div className="bg-white border-b border-slate-200/80 shadow-sm w-full">
        <div className="w-full flex h-16 sm:h-20 items-center justify-between gap-3 sm:gap-6 lg:h-[92px] px-3 sm:px-6 lg:px-10">
          
          {/* Logo (Pushed to Extreme Left) */}
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-3 min-[1380px]:gap-5 min-[1600px]:gap-7">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center gap-1 whitespace-nowrap py-8 text-[12px] font-extrabold uppercase tracking-wide transition-colors ${
                        active ? 'text-weld-blue border-b-2 border-[#0066FF]' : 'text-slate-800 hover:text-weld-blue'
                      }`}
                    >
                      {item.label}
                      {item.children && <ChevronDown size={13} strokeWidth={2.5} />}
                    </Link>
                    {item.children && (
                      <ul className="invisible absolute left-0 top-full min-w-[230px] border-t-2 border-[#0066FF] bg-white py-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                        {item.children.map(([label, href]) => (
                          <li key={href}>
                            <Link href={href} className="block px-4 py-2 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#0066FF]">
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Controls + Mobile Hamburger Menu */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 z-10">
            <Link
              href={enquireHref}
              className="btn-orange shrink-0 whitespace-nowrap text-[11px] sm:text-xs min-[1380px]:text-sm px-3 sm:px-5 min-[1380px]:px-6 py-2 sm:py-2.5 min-[1380px]:py-3 font-display font-extrabold uppercase tracking-wider text-white shadow-md rounded-lg"
            >
              Enquire Now
            </Link>

            {/* HAMBURGER MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-lg bg-slate-100 border border-slate-300 text-[#0B2545] hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all xl:hidden cursor-pointer shadow-xs"
            >
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="absolute inset-0 bg-black/60 backdrop-blur-xs" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <span className="font-display text-lg font-bold uppercase tracking-wide text-[#0B2545]">Navigation Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200"
              >
                <X size={22} />
              </button>
            </div>
            
            <ul className="flex-1 px-3 py-3">
              {mainNav.map((item) => (
                <li key={item.label} className="border-b border-slate-100">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex-1 px-3 py-3.5 text-sm font-bold uppercase tracking-wide ${
                        isActive(item.href) ? 'text-[#0066FF]' : 'text-slate-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        aria-label={`Show ${item.label} links`}
                        aria-expanded={expanded === item.label}
                        className="grid h-11 w-11 place-items-center"
                      >
                        <ChevronDown size={18} className={`transition-transform ${expanded === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.children && expanded === item.label && (
                    <ul className="pb-2 pl-5 bg-slate-50 rounded-lg mb-2">
                      {item.children.map(([label, href]) => (
                        <li key={href}>
                          <Link href={href} onClick={() => setOpen(false)} className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0066FF]">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t border-slate-200 p-5 bg-slate-50">
              <a href={site.phoneHref} className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
                <Phone size={18} className="text-[#0066FF]" /> {site.phone}
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <MessageCircle size={18} className="text-[#25D366]" /> Chat on WhatsApp
              </a>
              <Link href={enquireHref} onClick={() => setOpen(false)} className="btn-orange w-full text-center">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
