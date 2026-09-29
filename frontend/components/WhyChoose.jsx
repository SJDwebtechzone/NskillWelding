'use client';

import {
  Flame,
  Award,
  Layers,
  Cpu,
  ShieldCheck,
  Search,
  Globe,
  Factory,
  Zap,
  Sparkles,
} from 'lucide-react';

/* =========================================================
   8 WHY CHOOSE US POINTS DATA
========================================================= */
const whyPoints = [
  {
    num: '01',
    title: 'Practical Workshop Training',
    desc: 'Over 80% of course duration spent in hands-on workshop booth practice for real shop floor readiness.',
    icon: Flame,
    color: '#0066FF',
  },
  {
    num: '02',
    title: 'Experienced Trainers',
    desc: 'Learn directly from certified AWS/IS master instructors with 15+ years of heavy industrial experience.',
    icon: Award,
    color: '#9333EA',
  },
  {
    num: '03',
    title: 'Individual Welding Practice',
    desc: 'Dedicated individual welding booth and machine for every student—zero sharing for maximum arc time.',
    icon: Layers,
    color: '#059669',
  },
  {
    num: '04',
    title: 'Industry Standard Equipment',
    desc: 'State-of-the-art heavy industrial TIG, MIG/MAG, SMAW power sources & 6G fixed inclined pipe rigs.',
    icon: Cpu,
    color: '#D97706',
  },
  {
    num: '05',
    title: 'Welding Qualification Support',
    desc: 'Comprehensive WPS, PQR, and WPQT welder performance certification to ASME IX & AWS D1.1 codes.',
    icon: ShieldCheck,
    color: '#0284C7',
  },
  {
    num: '06',
    title: 'Inspection & NDT Expertise',
    desc: 'Hands-on training in Visual (VT), Ultrasonic (UT), Magnetic (MT), and Dye Penetrant (PT) testing.',
    icon: Search,
    color: '#7C3AED',
  },
  {
    num: '07',
    title: 'Career & Placement Assistance',
    desc: '100% placement assistance & specialized Gulf career guidance for Middle East, Europe & India.',
    icon: Globe,
    color: '#2563EB',
  },
  {
    num: '08',
    title: 'Corporate Training',
    desc: 'Tailored workforce upskilling, welder re-qualification, and shutdown training for engineering firms.',
    icon: Factory,
    color: '#059669',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white py-16 sm:py-20 lg:py-24 border-b border-slate-800">
      {/* Background Industrial Metallic Grid & Blue Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-[#0066FF]_1px,transparent_1px] [background-size:28px_28px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0066FF]/15 via-[#38BDF8]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
          {/* Top Industrial Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/90 border border-slate-700 shadow-md px-4 py-1.5 mb-4 cursor-default">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0066FF] text-white">
              <Zap size={13} className="animate-pulse" />
            </span>
            <span className="font-display text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#38BDF8]">
              NATIONAL INSTITUTE OF WELDING • EXCELLENCE & TRUST
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-ping" />
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-extrabold uppercase tracking-tight text-white text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.6rem] leading-[1.12]">
            Why National Institute of <span className="text-weld-blue drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">Welding?</span>
          </h2>

          {/* Short Intro Paragraph */}
          <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-300 font-medium max-w-2xl mx-auto">
            We provide 100% practical workshop booth training, industrial standard equipment, certified master instructors, welder performance qualification, and dedicated India & Gulf career placement assistance.
          </p>

          {/* Symmetrical Laser Alignment Rule */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-l from-[#38BDF8] to-transparent rounded-full" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8] animate-ping" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#38BDF8] to-transparent rounded-full" />
          </div>
        </div>

        {/* ===================================================
            SEAMLESS INDUSTRIAL WELDED STEEL PLATE MATRIX (2x4 GRID - NO CARDS)
        =================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-12 items-start">
          {whyPoints.map((point) => {
            const IconComponent = point.icon;

            return (
              <div
                key={point.num}
                className="group relative flex flex-col justify-between transition-all duration-300"
              >
                {/* Node Header: Metallic Number Badge & Torch Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-tech text-xl font-black text-[#38BDF8] bg-slate-800/90 border border-slate-700/80 px-2.5 py-0.5 rounded-lg shadow-sm">
                      {point.num}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF] group-hover:bg-[#38BDF8] group-hover:shadow-[0_0_8px_#38BDF8] transition-all" />
                  </div>

                  {/* Icon Node Container */}
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/90 border border-slate-700/80 text-white shadow-md group-hover:scale-110 group-hover:border-[#38BDF8] transition-all duration-300"
                    style={{ color: point.color }}
                  >
                    <IconComponent size={22} strokeWidth={2.2} />
                  </div>
                </div>

                {/* Point Title with Laser Underline Accent */}
                <div>
                  <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-wide text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {point.title}
                  </h3>

                  {/* Animated Laser Weld Seam Underline */}
                  <div className="mt-2 h-[2px] w-12 bg-[#0066FF]/40 group-hover:w-full group-hover:bg-[#38BDF8] transition-all duration-500 rounded-full" />

                  {/* Description Text */}
                  <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-300 font-medium">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
