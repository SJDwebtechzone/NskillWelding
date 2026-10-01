import Link from 'next/link';

export default function Logo({ tagline = true, isDark = false }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 sm:gap-3 shrink-0 group antialiased"
      aria-label="National Institute of Welding home"
    >
      <img
        src="/images/logo.png"
        alt="National Institute of Welding Shield Logo"
        className="h-10 w-auto sm:h-12 lg:h-14 drop-shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0 object-contain"
      />
      <span className="leading-none shrink-0">
        <span
          className={`block font-display text-[13px] sm:text-[15px] lg:text-[17px] font-black uppercase tracking-tight leading-tight whitespace-nowrap ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          National Institute
        </span>
        <span
          className={`block font-display text-[13px] sm:text-[15px] lg:text-[17px] font-black uppercase tracking-tight leading-tight whitespace-nowrap ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          of Welding
        </span>
        {tagline && (
          <span
            className={`hidden xl:block mt-0.5 text-[9.5px] italic font-semibold ${
              isDark ? 'text-blue-200/90' : 'text-slate-600'
            }`}
          >
            Learn. Practice. Qualify. Build Your Career.
          </span>
        )}
      </span>
    </Link>
  );
}
