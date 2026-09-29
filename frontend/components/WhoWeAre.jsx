'use client';

import { useState, useEffect } from 'react';
import {
  Flame,
  Award,
  Factory,
  ChevronRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  Plus,
  Minus,
} from 'lucide-react';

/* =========================================================
   HORIZONTAL WELDING PROCESS PIPELINE DATA
========================================================= */
const pipelineSteps = [
  {
    id: 'training',
    stepNumber: '01',
    title: 'Training',
    tagline: '100% Practical Arc, TIG, MIG & Pipe Welding Workshop',
    description:
      'Master heavy industrial welding in individual hands-on welding booths under certified AWS/IS master instructors. Complete training from 1G flat to 6G pipe positions.',
    icon: Flame,
    color: '#0066FF',
    accentGradient: 'from-[#0066FF] via-[#38BDF8] to-transparent',
    tags: ['ARC', 'TIG', 'MIG', '3G', '6G', 'Pipe', 'Structural'],
    bullets: [
      '100% Practical Individual Welding Booths',
      '1G to 6G & 6GR Pipe Welding Positions',
      'Mild Steel, Stainless Steel (SS) & Aluminum',
    ],
    linkHref: '#courses',
    linkText: 'Explore Welding Courses',
  },
  {
    id: 'qualification',
    stepNumber: '02',
    title: 'Qualification',
    tagline: 'International Standards & Welder Certification Support',
    description:
      'Official welder performance qualification and testing supported by WPS (Welding Procedure Specification), PQR, and WPQT documentation to ASME & AWS international codes.',
    icon: Award,
    color: '#9333EA',
    accentGradient: 'from-[#9333EA] via-[#C084FC] to-transparent',
    tags: ['Welder Qualification', 'Certification', 'WPS', 'PQR', 'WPQT'],
    bullets: [
      'ASME Sec IX & AWS D1.1 Code Standards',
      'Mechanical Bend Testing & X-Ray Radiography',
      'Third-Party Witnessing & Certification Support',
    ],
    linkHref: '/services#qualification',
    linkText: 'View Qualification Process',
  },
  {
    id: 'services',
    stepNumber: '03',
    title: 'Industry Services',
    tagline: 'Quality Assurance, NDT Inspection & Corporate Training',
    description:
      'Comprehensive industrial consultancy, QA/QC NDT inspection services (VT, UT, MT, PT), and tailored shutdown upskilling programs for engineering enterprises.',
    icon: Factory,
    color: '#059669',
    accentGradient: 'from-[#059669] via-[#34D399] to-transparent',
    tags: ['Inspection', 'NDT', 'Corporate Training', 'Consultancy'],
    bullets: [
      'VT, UT, MT & PT Non-Destructive Testing (NDT)',
      'Customized Shutdown & Maintenance Workforce Training',
      'Welding Procedure & Quality Management Consultancy',
    ],
    linkHref: '/services',
    linkText: 'Explore Industry Services',
  },
];

export default function WhoWeAre() {
  const [activeStep, setActiveStep] = useState(0);

  // Continuous Auto-Cycle pipeline step every 2.8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-16 lg:py-20 border-b border-slate-200">
      {/* Background Industrial Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-[#0066FF]_1px,transparent_1px] [background-size:24px_24px]" />

      <div className="container-site relative z-10">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          {/* Top Industrial Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#CBD5E1] shadow-sm px-4 py-1.5 mb-5 group cursor-default">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF3FE] text-[#0066FF]">
              <Zap size={13} className="animate-pulse" />
            </span>
            <span className="font-display text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#0B2545]">
              WHO WE ARE & WHAT WE DO
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF] animate-ping" />
          </div>

          {/* Main Headline - Symmetrically Balanced 2-Line Block */}
          <h2 className="font-display font-extrabold uppercase tracking-tight leading-[1.14] text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.5rem]">
            <span className="block text-[#0B2545]">
              MORE THAN WELDING TRAINING.
            </span>
            <span className="block text-weld-blue drop-shadow-[0_0_12px_rgba(0,102,255,0.25)] mt-1 sm:mt-1.5">
              WE BUILD INDUSTRY-READY PROFESSIONALS.
            </span>
          </h2>

          {/* Short Intro Paragraph */}
          <p className="mt-5 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            At National Institute of Welding (NIW), we bridge the gap between classroom theory and heavy industrial demands.
            Through hands-on shop practice, international welder certification, and specialized engineering consultancy, we prepare skilled welders and inspectors for top global careers.
          </p>

          {/* Symmetrical Laser Alignment Rule */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-l from-[#0066FF] to-transparent rounded-full" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#0066FF] shadow-[0_0_10px_#0066FF] animate-ping" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#0066FF] to-transparent rounded-full" />
          </div>
        </div>

        {/* ===================================================
            HORIZONTAL WELDING PROCESS PIPELINE TRACK
        =================================================== */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Weld Seam Pipe Line */}
          <div className="absolute left-[26px] sm:left-[38px] top-6 bottom-6 w-[4px] bg-slate-200 rounded-full z-0 hidden sm:block">
            {/* Travelling Arc Glow along the seam */}
            <div
              className="w-full bg-gradient-to-b from-[#0066FF] via-[#38BDF8] to-[#059669] rounded-full transition-all duration-700 shadow-[0_0_10px_#0066FF]"
              style={{
                height: `${((activeStep + 1) / pipelineSteps.length) * 100}%`,
              }}
            />
          </div>

          {/* 3 Wide Connected Industrial Step Rows */}
          <div className="space-y-4 relative z-10">
            {pipelineSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = idx === activeStep;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer relative rounded-2xl transition-all duration-500 overflow-hidden border-2 ${
                    isActive
                      ? 'bg-white shadow-[0_16px_40px_rgba(11,37,69,0.12)] border-l-[6px] p-5 sm:p-7'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white p-4 sm:p-5'
                  }`}
                  style={{
                    borderLeftColor: isActive ? step.color : 'transparent',
                    borderColor: isActive ? step.color : '#E2E8F0',
                  }}
                >
                  {/* Top Glowing Laser Seam Line for Active Row */}
                  {isActive && (
                    <div
                      className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${step.accentGradient} opacity-90 animate-pulse`}
                    />
                  )}

                  {/* ROW HEADER (Always Visible) */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                      {/* Step Number Badge Node */}
                      <div
                        className={`flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl font-tech text-base sm:text-xl font-black transition-all duration-500 ${
                          isActive
                            ? 'text-white shadow-lg shadow-black/10 scale-105'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                        style={{
                          backgroundColor: isActive ? step.color : undefined,
                          boxShadow: isActive ? `0 8px 20px ${step.color}40` : undefined,
                        }}
                      >
                        {step.stepNumber}
                      </div>

                      {/* Title & Tagline Summary */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <h3
                            className="font-display text-lg sm:text-2xl font-black uppercase tracking-wide transition-colors"
                            style={{ color: isActive ? step.color : '#0B2545' }}
                          >
                            {step.title}
                          </h3>
                          {isActive && (
                            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#EBF3FE] text-[#0066FF] border border-[#B1D8FF]">
                              <Flame size={11} className="animate-spark-flicker text-[#0066FF]" />
                              ACTIVE STAGE
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-500 truncate mt-0.5">
                          {step.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Expand / Collapse Indicator Button */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#0B2545] text-white border-[#0B2545] rotate-180'
                          : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF]'
                      }`}
                    >
                      {isActive ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                    </div>
                  </div>

                  {/* EXPANDED CONTENT AREA */}
                  {isActive && (
                    <div className="mt-6 pt-5 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                      {/* Description Text */}
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium max-w-4xl">
                        {step.description}
                      </p>

                      {/* Grid of Tags & Specifications */}
                      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Tags Pill Box */}
                        <div className="md:col-span-7">
                          <div className="flex items-center gap-1.5 mb-2.5">
                            <Sparkles size={13} style={{ color: step.color }} />
                            <span className="font-display text-[10.5px] font-extrabold uppercase tracking-wider text-[#0B2545]">
                              KEY SKILLS & SPECIFICATIONS:
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {step.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EBF3FE] text-[#0B2545] border border-[#B1D8FF] font-display text-xs sm:text-[12.5px] font-extrabold tracking-wide shadow-xs transition-all hover:scale-105"
                              >
                                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bullets Column */}
                        <div className="md:col-span-5 space-y-2">
                          {step.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-center gap-2 text-xs sm:text-[12.5px] font-bold text-slate-700">
                              <CheckCircle2 size={15} style={{ color: step.color }} className="shrink-0" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
