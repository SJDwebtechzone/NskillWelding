'use client';

import { useRef } from 'react';
import {
  Factory,
  Flame,
  Zap,
  Building2,
  Ship,
  Wrench,
  Layers,
  FlaskConical,
  Waves,
  HardHat,
  ChevronLeft,
  ChevronRight,
  Globe,
} from 'lucide-react';

/* =========================================================
   10 INDUSTRY SECTORS DATA
========================================================= */
const industrySectors = [
  {
    id: 'manufacturing',
    code: 'SEC-01',
    name: 'Manufacturing',
    emoji: '🏭',
    icon: Factory,
    badge: 'Pressure Vessels & Automation',
    standards: 'AWS D1.1 / ISO 9606',
  },
  {
    id: 'oil-gas',
    code: 'SEC-02',
    name: 'Oil & Gas',
    emoji: '🛢️',
    icon: Flame,
    badge: '6G High-Pressure Pipelines',
    standards: 'ASME IX / API 1104',
  },
  {
    id: 'power-plants',
    code: 'SEC-03',
    name: 'Power Plants',
    emoji: '⚡',
    icon: Zap,
    badge: 'Boiler Tubes & High-Alloy',
    standards: 'ASME SEC I & VIII',
  },
  {
    id: 'construction',
    code: 'SEC-04',
    name: 'Construction',
    emoji: '🏗️',
    icon: Building2,
    badge: 'Structural Steel & High-Rise',
    standards: 'AWS D1.1 Structural',
  },
  {
    id: 'shipbuilding',
    code: 'SEC-05',
    name: 'Shipbuilding',
    emoji: '🚢',
    icon: Ship,
    badge: 'Marine Steel & Submerged Arc',
    standards: 'DNV / ABS / Lloyd\'s',
  },
  {
    id: 'heavy-engineering',
    code: 'SEC-06',
    name: 'Heavy Engineering',
    emoji: '🔩',
    icon: Wrench,
    badge: 'Heavy Equipment & Cranes',
    standards: 'ASME IX / AWS D1.1',
  },
  {
    id: 'fabrication',
    code: 'SEC-07',
    name: 'Fabrication',
    emoji: '🏭',
    icon: Layers,
    badge: 'Plate Fit-Up & Ductwork',
    standards: 'ISO 3834 / AWS D1.1',
  },
  {
    id: 'petrochemical',
    code: 'SEC-08',
    name: 'Petrochemical',
    emoji: '🧪',
    icon: FlaskConical,
    badge: 'Stainless & Exotic Alloys',
    standards: 'ASME B31.3 Piping',
  },
  {
    id: 'offshore',
    code: 'SEC-09',
    name: 'Offshore',
    emoji: '🌊',
    icon: Waves,
    badge: 'Subsea Rigs & Platforms',
    standards: 'AWS D1.1 / 6G Pipe',
  },
  {
    id: 'infrastructure',
    code: 'SEC-10',
    name: 'Infrastructure',
    emoji: '🚧',
    icon: HardHat,
    badge: 'Bridges, Flyovers & Rail',
    standards: 'AWS D1.5 Bridge Code',
  },
];

export default function IndustrySectors() {
  const scrollContainerRef = useRef(null);

  // Triple duplicated list for 100% seamless infinite loop
  const duplicatedSectors = [...industrySectors, ...industrySectors, ...industrySectors];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="scroll-mt-20 bg-slate-50/80 py-16 sm:py-20 lg:py-24 border-b border-slate-200 overflow-hidden relative">
      <div className="container-site relative z-10">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-[#CBD5E1] px-4 py-1.5 mb-4 shadow-sm">
            <Globe size={14} className="text-[#0066FF] animate-pulse" />
            <span className="font-tech text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.08em] text-[#0B2545]">
              GLOBAL INDUSTRIAL DEPLOYMENT • 10 CORE SECTORS
            </span>
            <span className="h-2 w-2 rounded-full bg-[#0066FF] animate-ping" />
          </div>

          <h2 className="font-display font-extrabold uppercase tracking-tight text-[#0B2545] text-3xl sm:text-4xl lg:text-5xl">
            Industries We <span className="text-weld-blue">Support</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Our certified welders & inspection candidates are trained to meet international AWS, ASME & API standards across 10 major global heavy industrial sectors.
          </p>

          {/* Accent Line */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-l from-[#0066FF] to-transparent rounded-full" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#0066FF] shadow-[0_0_10px_#0066FF] animate-ping" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#0066FF] to-transparent rounded-full" />
          </div>
        </div>

        {/* ===================================================
            CONTINUOUS INFINITE MARQUEE CAROUSEL REEL
        =================================================== */}
        <div className="relative max-w-full overflow-hidden py-4">
          {/* Gradient Edge Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

          {/* Left / Right Nav Arrows */}
          <button
            type="button"
            onClick={handleScrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B2545] border border-slate-300 shadow-md hover:bg-[#0066FF] hover:text-white transition-all cursor-pointer"
            title="Scroll Left"
          >
            <ChevronLeft size={20} strokeWidth={3} />
          </button>

          <button
            type="button"
            onClick={handleScrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B2545] border border-slate-300 shadow-md hover:bg-[#0066FF] hover:text-white transition-all cursor-pointer"
            title="Scroll Right"
          >
            <ChevronRight size={20} strokeWidth={3} />
          </button>

          {/* Scrolling Marquee Container Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-5 sm:gap-6 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] overflow-x-auto scrollbar-none px-6 py-2"
          >
            {duplicatedSectors.map((sector, idx) => {
              return (
                <div
                  key={`${sector.id}-${idx}`}
                  className="shrink-0 w-[240px] sm:w-[270px] h-[120px] sm:h-[135px] bg-white rounded-[22px] border border-slate-200/90 shadow-[0_10px_30px_rgba(11,37,69,0.08)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.18)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center group cursor-pointer"
                >
                  {/* Top Edge Gradient Accent Bar (Exact Match to User Image) */}
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-400 via-[#0066FF] to-[#38BDF8] rounded-t-[22px]" />

                  {/* Icon & Title Container */}
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-2xl sm:text-3xl transition-transform group-hover:scale-125 duration-300">
                      {sector.emoji}
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-[#0B2545] group-hover:text-[#0066FF] transition-colors">
                      {sector.name}
                    </h3>
                  </div>

                  {/* Subtitle Badge & Code Standard */}
                  <span className="font-tech text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    {sector.badge}
                  </span>

                  <span className="mt-1 font-tech text-[9.5px] font-extrabold text-[#0066FF] bg-[#EBF3FE] px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#0066FF]/20">
                    {sector.standards}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
