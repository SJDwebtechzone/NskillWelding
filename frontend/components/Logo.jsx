import Link from 'next/link';

function GearMark({ className = '' }) {
  const teeth = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" className={className} aria-hidden="true">
      <g fill="#9333EA">
        {teeth.map((deg) => (
          <rect key={deg} x="28" y="1" width="8" height="10" rx="1.5" transform={`rotate(${deg} 32 32)`} />
        ))}
        <circle cx="32" cy="32" r="24" />
      </g>
      <circle cx="32" cy="32" r="18.5" fill="#fff" />
      <circle cx="32" cy="32" r="16" fill="#9333EA" />
      <text x="32" y="37.5" textAnchor="middle" fill="#fff" fontFamily="Barlow Condensed, Arial Narrow, sans-serif"
            fontWeight="800" fontSize="15" letterSpacing=".5">NIW</text>
    </svg>
  );
}

export default function Logo({ tagline = true }) {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0" aria-label="National Institute of Welding home">
      <GearMark className="h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12 shrink-0" />
      <span className="leading-none shrink-0">
        <span className="block font-display text-[12px] sm:text-[15px] lg:text-[17px] font-black uppercase tracking-tight text-[#0B2545] leading-tight whitespace-nowrap">
          National Institute
        </span>
        <span className="block font-display text-[12px] sm:text-[15px] lg:text-[17px] font-black uppercase tracking-tight text-[#0B2545] leading-tight whitespace-nowrap">
          of Welding
        </span>
        {tagline && (
          <span className="hidden xl:block mt-0.5 text-[9.5px] italic text-slate-500 font-medium">
            Learn. Practice. Qualify. Build Your Career.
          </span>
        )}
      </span>
    </Link>
  );
}
