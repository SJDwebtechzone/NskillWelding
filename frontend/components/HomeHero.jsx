'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronLeft,
  PhoneCall,
  Flame,
  Award,
  ShieldCheck,
  Globe2,
} from 'lucide-react';
import { site } from '@/lib/site';

/* =========================================================
   HERO SLIDES & 4 TRUST POINTS
========================================================= */
const heroSlides = [
  {
    src: '/images/welding-hero.jpg',
    caption: '100% Practical Arc & TIG Welding',
  },
  {
    src: '/images/welding-hero-2.jpg',
    caption: 'Advanced Pipe & 6G Welder Qualification',
  },
  {
    src: '/images/welding-hero-3.jpg',
    caption: 'Industrial Heavy Structure Workshop',
  },
  {
    src: '/images/welding-hero-4.jpg',
    caption: 'MIG/MAG & Stainless Steel Booths',
  },
  {
    src: '/images/welding-hero-5.jpg',
    caption: 'International Certification & Inspection',
  },
];

const trustPoints = [
  { icon: Flame, title: '100% Practical Training' },
  { icon: Award, title: 'Industry-Oriented Courses' },
  { icon: ShieldCheck, title: 'Qualification & Certification Support' },
  { icon: Globe2, title: 'India & Global Career Opportunities' },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Next Slide Handler
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Prev Slide Handler
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Continuous Auto-Slide Timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      {/* ===================================================
          HERO BANNER SECTION
      =================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EAF3FD] via-[#F6F9FE] to-[#E3EEFC] text-[#0A3268] border-b border-[#DCE8F5] pt-2 sm:pt-4 lg:pt-5 pb-12 lg:pb-16">
        {/* CIRCLE 1: Far Left Decorative Chevron Accents - Molten Amber & Electric Blue Flame Cone */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block pointer-events-none group/chevron">
          {/* Top Industrial Steel Torch Shield Chevron */}
          <div className="relative">
            <div
              className="w-16 h-28 sm:w-20 sm:h-36 bg-gradient-to-br from-[#0B2545] via-[#1A3860] to-[#0B2545] drop-shadow-xl border-r border-[#FF8C00]/40"
              style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
            />
            {/* Molten Heat Seam Line at Overlap */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF8C00]/60 to-transparent opacity-90 shadow-[0_0_12px_#FF8C00]"
              style={{ clipPath: 'polygon(0 47%, 100% 50%, 0 53%)' }}
            />
          </div>

          {/* Bottom Fiery Molten Amber to Electric Arc Blue Flame Cone Chevron */}
          <div className="relative -mt-16 sm:-mt-20 ml-3 sm:ml-4">
            {/* Main Flame Cone Plate with Dual Molten Gold & Electric Blue Gradient */}
            <div
              className="w-20 h-32 sm:w-24 sm:h-40 bg-gradient-to-br from-[#FF8C00] via-[#FFD700] via-[#0066FF] to-[#004BB7] shadow-[0_0_30px_rgba(255,140,0,0.55),0_0_20px_rgba(0,102,255,0.45)]"
              style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
            />

            {/* Internal Heat Shimmer & Plasma Arc Sweep */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/50 via-white/60 via-[#38BDF8]/40 to-transparent animate-pulse"
              style={{ clipPath: 'polygon(0 0, 100% 50%, 85% 50%, 0 8%)' }}
            />

            {/* Apex Molten Heat Glow Aura (Seamlessly Integrated) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 flex items-center justify-center pointer-events-none">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#FF8C00]/70 via-[#38BDF8]/60 to-transparent blur-md animate-pulse" />
              <div className="absolute h-3 w-3 rounded-full bg-[#FFD700] shadow-[0_0_14px_#FF8C00] animate-ping opacity-80" />
            </div>
          </div>
        </div>

        {/* Main Banner Container */}
        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[420px] sm:min-h-[460px] lg:min-h-[490px]">
            {/* -----------------------------------------------
                LEFT TEXT & CONTENT COLUMN
            ----------------------------------------------- */}
            <div className="lg:col-span-7 z-20 flex flex-col justify-center pt-4 sm:pt-6 lg:pt-8 pb-8 pl-4 sm:pl-8 lg:pl-10 pr-2 lg:pr-6">
              {/* Badge with Arc Ignition Ping */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white border border-[#C9DFF5] shadow-[0_2px_7px_rgba(20,80,140,0.08)] px-3.5 sm:px-4 py-1.5 mb-4 sm:mb-5 group/badge cursor-default hover:border-[#0066FF]/40 transition-colors">
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#E7F2FF] text-[#0066FF] overflow-hidden">
                  <span className="absolute inset-0 bg-[#0066FF]/20 animate-ping rounded-full" />
                  <Flame size={13} strokeWidth={2.5} className="relative z-10 animate-spark-flicker" />
                </span>
                <span className="font-display text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.04em] whitespace-nowrap text-[#0B2545] flex items-center gap-1.5">
                  PREMIER INDUSTRIAL WELDING INSTITUTE
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                </span>
              </div>

              {/* Main Headline with Welding Arc Spark & Glow Transitions */}
              <div key={`headline-${currentSlide}`} className="relative group/text">
                <h1 className="font-display font-black uppercase tracking-[-0.015em] leading-[1.08] text-[#0B2545] text-2xl sm:text-3xl md:text-[2.4rem] lg:text-[2.15rem] xl:text-[2.6rem] 2xl:text-[2.95rem] space-y-1 sm:space-y-1.5">
                  {/* Line 1: Build Industry-Ready with Arc Spark Lead */}
                  <span className="block whitespace-nowrap transition-all duration-300 group-hover/text:translate-x-1 animate-in fade-in slide-in-from-left-3 duration-500 flex items-center gap-2">
                    <span className="hover:text-[#0066FF] transition-colors duration-200">BUILD INDUSTRY-READY</span>
                    <span className="inline-flex items-center text-[#38BDF8] opacity-80 group-hover/text:opacity-100 transition-opacity">
                      <Flame size={22} className="animate-spark-flicker text-[#0066FF]" />
                    </span>
                  </span>

                  {/* Line 2: Welding Skills with Molten Heat Gradient Sweep */}
                  <span className="block whitespace-nowrap transition-all duration-300 group-hover/text:translate-x-2 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B2545] via-[#0066FF] via-[#38BDF8] to-[#0B2545] animate-molten-sweep hover:brightness-125 transition-all">
                      WELDING SKILLS
                    </span>
                  </span>

                  {/* Line 3: For Your Future with Slide Arc Flash & Electric Blue Plasma Aura */}
                  <span className="block whitespace-nowrap text-weld-blue drop-shadow-[0_0_14px_rgba(0,102,255,0.45)] transition-all duration-300 group-hover/text:drop-shadow-[0_0_24px_rgba(0,102,255,0.85)] group-hover/text:translate-x-3 animate-weld-flash animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
                    FOR YOUR FUTURE
                  </span>
                </h1>

                {/* Travelling Weld Seam Bead Line (Simulating Welder Laying a Bead) */}
                <div className="mt-3.5 relative flex items-center w-full max-w-[340px] sm:max-w-[420px] h-3 overflow-hidden rounded-full">
                  {/* Seam Base Line */}
                  <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-[#0066FF] via-[#38BDF8] to-transparent shadow-[0_0_12px_#0066FF]" />
                  
                  {/* Travelling Weld Bead Spark Point */}
                  <div className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white border-2 border-[#38BDF8] shadow-[0_0_14px_#38BDF8] animate-weld-bead flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[#0066FF] opacity-75 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Subheading with Electric Voltage Dividers */}
              <div key={`sub-${currentSlide}`} className="mt-5 text-[#1E293B] max-w-[680px] animate-in fade-in duration-700">
                <p className="text-xs sm:text-sm lg:text-[15px] font-bold leading-[1.6]">
                  Practical Welding Training
                  <span className="mx-2.5 text-[#0066FF] font-black animate-pulse shadow-[0_0_8px_#0066FF]">|</span>
                  Welder Qualification
                  <span className="mx-2.5 text-[#0066FF] font-black animate-pulse shadow-[0_0_8px_#0066FF]">|</span>
                  Welding Inspection
                </p>
                <p className="text-xs sm:text-sm lg:text-[15px] font-bold leading-[1.6] mt-1 text-[#0B2545]/90">
                  Industrial Skill Development
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#courses"
                  className="group relative overflow-hidden inline-flex h-[48px] sm:h-[52px] items-center justify-center gap-2.5 bg-[#0B2545] hover:bg-[#0066FF] text-white px-7 sm:px-8 rounded-xl font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl shadow-[#0B2545]/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Arc Shimmer Sweep on Hover */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    EXPLORE COURSES
                    <ChevronRight
                      size={18}
                      strokeWidth={3}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>

                <a
                  href={site.phoneHref}
                  className="group relative overflow-hidden inline-flex h-[48px] sm:h-[52px] items-center justify-center gap-3 bg-white hover:bg-slate-50 text-[#0B2545] px-6 sm:px-7 rounded-xl border-2 border-[#0B2545]/20 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EBF3FE] text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                    <PhoneCall size={14} className="group-hover:rotate-12 transition-transform" />
                  </div>
                  TALK TO AN EXPERT
                </a>
              </div>
            </div>

            {/* -----------------------------------------------
                CIRCLE 2: RIGHT COLUMN & MULTI-LAYERED CHEVRON TRANSITION ZONE
            ----------------------------------------------- */}
            <div
              className="lg:col-span-5 relative min-h-[340px] sm:min-h-[400px] lg:min-h-full lg:-mr-[4vw] group/carousel"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* TRANSITION LAYER 1: Outer Translucent White Chevron Wing */}
              <div
                className="absolute inset-0 -left-20 sm:-left-32 lg:-left-44 bg-white/80 z-0 pointer-events-none shadow-xl"
                style={{
                  clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 28% 100%, 0 50%)',
                }}
              />

              {/* TRANSITION LAYER 2: Light Blue Translucent Chevron Wing */}
              <div
                className="absolute inset-0 -left-10 sm:-left-16 lg:-left-20 bg-[#CDE3FB]/85 z-[1] pointer-events-none"
                style={{
                  clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 28% 100%, 0 50%)',
                }}
              />

              {/* TRANSITION LAYER 3: Crisp Solid White 4px Border Frame */}
              <div
                className="absolute inset-0 -left-1 bg-white z-[2] pointer-events-none"
                style={{
                  clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 28% 100%, 0 50%)',
                }}
              />

              {/* MAIN WELDER PHOTO CAROUSEL CONTAINER WITH SHARP CHEVRON CUTOUT */}
              <div
                className="absolute inset-0 left-1 overflow-hidden bg-[#0B2545] z-[3]"
                style={{
                  clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 28% 100%, 0 50%)',
                }}
              >
                {/* Images Layer with Premium Ken Burns 3D Zoom & Pan Transition */}
                {heroSlides.map((slide, idx) => (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      idx === currentSlide
                        ? 'opacity-100 scale-100 translate-x-0 z-10 pointer-events-auto'
                        : 'opacity-0 scale-110 -translate-x-3 z-0 pointer-events-none'
                    }`}
                    style={{
                      backgroundImage: `
                        linear-gradient(90deg, rgba(11,37,69,0.22) 0%, rgba(0,102,255,0.04) 50%, rgba(11,37,69,0.30) 100%),
                        url("${slide.src}")
                      `,
                    }}
                  />
                ))}

                {/* Electric Arc Spark Glow Flare Accent at Chevron Apex */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-36 w-36 bg-gradient-to-r from-[#0066FF]/40 via-[#38BDF8]/30 to-transparent blur-xl pointer-events-none z-20 animate-pulse"
                />

                {/* Glass Morphic Slide Caption Badge */}
                <div
                  key={currentSlide}
                  className="absolute bottom-4 left-[30%] z-20 hidden sm:flex items-center gap-2.5 bg-[#0B2545]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-2xl transition-all duration-700 animate-in fade-in slide-in-from-bottom-2"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0066FF]" />
                  </span>
                  <span className="font-display text-[9.5px] uppercase font-extrabold tracking-wider text-white">
                    {heroSlides[currentSlide].caption}
                  </span>
                </div>
              </div>

              {/* DIAGONAL TRANSLUCENT WHITE GLASS SLASH OVERLAY WITH SHIMMER SWEEP */}
              <div
                className="absolute top-0 bottom-0 left-[-4%] w-[90px] sm:w-[120px] bg-gradient-to-r from-white/30 via-white/60 to-white/30 z-[4] pointer-events-none transition-transform duration-1000 ease-in-out"
                style={{
                  clipPath: 'polygon(55% 0, 100% 0, 45% 100%, 0 100%)',
                }}
              />



              {/* Slide Indicator Dots */}
              <div className="absolute bottom-4 right-6 z-30 flex items-center gap-2 bg-[#0B2545]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 shadow-lg">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'w-7 bg-[#0066FF]'
                        : 'w-2.5 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              4 TRUST POINTS INDUSTRIAL WELDING PLATE CONTAINER
          ===================================================== */}
          <div className="mt-8 lg:mt-10 mb-4 z-30 relative">
            {/* Outer Industrial Steel Plate Frame with Glowing Arc Weld Seam */}
            <div className="relative rounded-2xl bg-gradient-to-r from-white/95 via-[#F3F8FE]/95 to-white/95 backdrop-blur-xl border-2 border-[#D2E4F7] shadow-[0_18px_45px_rgba(11,37,69,0.14),0_0_25px_rgba(0,102,255,0.12)] p-1 sm:p-1.5 overflow-hidden group/plate">
              
              {/* Top Industrial Weld Seam Beam (Animated Electric Arc Line) */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0066FF] via-[#38BDF8] via-white to-transparent shadow-[0_0_12px_#0066FF] animate-pulse" />

              {/* Corner Rivet / Weld Joint Accents */}
              <div className="absolute top-2 left-2.5 h-1.5 w-1.5 rounded-full bg-[#0066FF] shadow-[0_0_6px_#0066FF]" />
              <div className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-[#0066FF] shadow-[0_0_6px_#0066FF]" />
              <div className="absolute bottom-2 left-2.5 h-1.5 w-1.5 rounded-full bg-[#0066FF] shadow-[0_0_6px_#0066FF]" />
              <div className="absolute bottom-2 right-2.5 h-1.5 w-1.5 rounded-full bg-[#0066FF] shadow-[0_0_6px_#0066FF]" />

              {/* Inner Grid Plate */}
              <div className="bg-white/90 rounded-[14px] px-3.5 sm:px-6 lg:px-7 py-3.5 sm:py-4.5 border border-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3.5 gap-x-2">
                  {trustPoints.map((point, index) => {
                    const IconComp = point.icon;
                    const isActive = index === currentSlide % trustPoints.length;
                    return (
                      <div
                        key={point.title}
                        onClick={() => setCurrentSlide(index)}
                        className={`group cursor-pointer relative flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#EBF3FE] to-[#E3EEFC] border border-[#B1D8FF] shadow-[0_4px_16px_rgba(0,102,255,0.15)]'
                            : 'hover:bg-[#F6FAFE] border border-transparent hover:border-[#D5E7FA]'
                        } ${
                          index !== 0 ? 'lg:border-l lg:border-slate-200/80' : ''
                        } ${index % 2 === 1 ? 'sm:border-l sm:border-slate-200/80 lg:border-l-0' : ''}`}
                      >
                        {/* Active Item Electric Arc Edge Highlight */}
                        {isActive && (
                          <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#0066FF] shadow-[0_0_10px_#0066FF]" />
                        )}

                        {/* Icon Box with Welding Arc Cell Styling */}
                        <div className="relative shrink-0">
                          <div
                            className={`flex h-11 sm:h-12 w-11 sm:w-12 items-center justify-center rounded-xl border-2 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                              isActive
                                ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-lg shadow-[#0066FF]/35'
                                : 'bg-[#EBF3FE] text-[#0066FF] border-[#BBE0FF] group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF]'
                            }`}
                          >
                            <IconComp size={21} strokeWidth={2.3} />
                          </div>
                          {/* Micro Spark Ping Indicator */}
                          {isActive && (
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0066FF] border border-white" />
                            </span>
                          )}
                        </div>

                        {/* Title with Welding Industrial Typography */}
                        <div className="flex flex-col">
                          <h3
                            className={`font-display text-[10.5px] sm:text-[11.5px] lg:text-[12px] font-extrabold uppercase tracking-wide leading-tight transition-colors duration-200 ${
                              isActive
                                ? 'text-[#0066FF]'
                                : 'text-[#0B2545] group-hover:text-[#0066FF]'
                            }`}
                          >
                            {point.title}
                          </h3>
                          {isActive && (
                            <span className="inline-flex items-center gap-1 mt-1 text-[9px] font-bold text-[#0066FF] tracking-widest uppercase">
                              <Flame size={10} className="animate-spark-flicker" />
                              ACTIVE MODULE
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}