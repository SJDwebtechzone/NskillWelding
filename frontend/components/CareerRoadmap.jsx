'use client';

import { useState, useEffect } from 'react';
import {
  Flame,
  Zap,
  Cylinder,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Briefcase,
  RotateCw,
} from 'lucide-react';

/* =========================================================
   4 ORBITAL CAREER STAGES DATA
========================================================= */
const orbitStages = [
  {
    id: 'beginner',
    stageNumber: '01',
    badge: 'STAGE 01 // FOUNDATION',
    title: 'Beginner',
    tagline: 'Basic Welding → ARC → MIG/TIG',
    voltageReadout: '240A / 28V • STAGE 01 ONLINE',
    salaryGrowth: '1.5x - 2x Base Salary',
    progressPercent: 25,
    icon: Flame,
    color: '#0066FF',
    steps: ['Basic Welding', 'ARC', 'MIG/TIG'],
    targetRoles: ['Junior Welder', 'Fabrication Assistant', 'Shop Floor Welder'],
    positionAngle: 'top', // 12 o'clock
  },
  {
    id: 'skilled',
    stageNumber: '02',
    badge: 'STAGE 02 // POSITIONAL MASTERY',
    title: 'Skilled Welder',
    tagline: '3G → 4G → 5G → 6G',
    voltageReadout: '280A / 32V • STAGE 02 ONLINE',
    salaryGrowth: '2.5x - 3.5x Salary Growth',
    progressPercent: 50,
    icon: Zap,
    color: '#D97706',
    steps: ['3G', '4G', '5G', '6G'],
    targetRoles: ['6G Pipe Welder', 'High-Pressure Vessel Welder', 'Structural Specialist'],
    positionAngle: 'right', // 3 o'clock
  },
  {
    id: 'specialist',
    stageNumber: '03',
    badge: 'STAGE 03 // ALLOY & STRUCTURAL',
    title: 'Specialist',
    tagline: 'Pipe Welding → Structural → Stainless Steel',
    voltageReadout: '310A / 34V • STAGE 03 ONLINE',
    salaryGrowth: '4x - 5x High-Income Demand',
    progressPercent: 75,
    icon: Cylinder,
    color: '#059669',
    steps: ['Pipe Welding', 'Structural', 'Stainless Steel'],
    targetRoles: ['Cross-Country Pipeline Welder', 'Offshore Rig Specialist', 'Exotic Alloy Welder'],
    positionAngle: 'bottom', // 6 o'clock
  },
  {
    id: 'advanced',
    stageNumber: '04',
    badge: 'STAGE 04 // LEADERSHIP & QA/QC',
    title: 'Advanced Professional',
    tagline: 'Welder Qualification → Inspection → QA/QC → Supervisor',
    voltageReadout: '350A / 36V • STAGE 04 MASTER',
    salaryGrowth: '6x Global Senior Leadership',
    progressPercent: 100,
    icon: ShieldCheck,
    color: '#9333EA',
    steps: ['Welder Qualification', 'Welding Inspection', 'QA/QC', 'Supervisor'],
    targetRoles: ['Certified Welding Inspector (CWI)', 'QA/QC Engineer', 'Welding Shop Supervisor'],
    positionAngle: 'left', // 9 o'clock
  },
];

export default function CareerRoadmap() {
  const [activeOrbitIndex, setActiveOrbitIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-Orbit around the ring every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveOrbitIndex((prev) => (prev + 1) % orbitStages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentStage = orbitStages[activeOrbitIndex];
  const IconComp = currentStage.icon;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-16 lg:py-20 border-b border-slate-200">
      {/* Background Industrial Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-[#0066FF]_1px,transparent_1px] [background-size:24px_24px]" />

      <div className="container-site relative z-10">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#CBD5E1] shadow-sm px-4 py-1.5 mb-4 cursor-default">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF3FE] text-[#0066FF]">
              <Cpu size={13} className="animate-pulse" />
            </span>
            <span className="font-display text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#0B2545]">
              NIW 6G PIPE RIG • ORBITAL CAREER WHEEL
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF] animate-ping" />
          </div>

          <h2 className="font-display font-extrabold uppercase tracking-tight leading-[1.14] text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.5rem]">
            <span className="block text-[#0B2545]">
              BUILD YOUR WELDING CAREER ROADMAP.
            </span>
            <span className="block text-weld-blue drop-shadow-[0_0_12px_rgba(0,102,255,0.25)] mt-1 sm:mt-1.5">
              FROM BEGINNER TO QA/QC LEADER.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Click any node on the 6G Pipe Flange Orbit Wheel to inspect full skill progression, target roles & international certification.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-l from-[#0066FF] to-transparent rounded-full" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#0066FF] shadow-[0_0_10px_#0066FF] animate-ping" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#0066FF] to-transparent rounded-full" />
          </div>
        </div>

        {/* ===================================================
            CIRCULAR 6G PIPE FLANGE CAREER ORBIT WHEEL
        =================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto"
        >
          {/* -----------------------------------------------
              LEFT / CENTER: 6G PIPE FLANGE ORBIT RING WHEEL
          ----------------------------------------------- */}
          <div className="lg:col-span-6 flex justify-center py-6">
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
              {/* Outer Circular Steel Pipe Flange Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-slate-300 bg-white/60 shadow-[0_0_35px_rgba(11,37,69,0.12)] p-2">
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#0066FF]/40 relative flex items-center justify-center">
                  {/* Orbiting Electric Arc Beam Overlay */}
                  <div
                    className="absolute inset-0 rounded-full border-4 border-[#0066FF] shadow-[0_0_20px_#0066FF] transition-transform duration-700 pointer-events-none"
                    style={{
                      transform: `rotate(${activeOrbitIndex * 90}deg)`,
                      clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)',
                    }}
                  />
                </div>
              </div>

              {/* CENTER FLANGE HUB */}
              <div className="relative z-20 w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] rounded-full bg-[#0B2545] border-4 border-[#0066FF] shadow-2xl flex flex-col items-center justify-center text-white text-center p-3">
                <div
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white shadow-md mb-1.5 transition-transform duration-500 scale-105"
                  style={{ backgroundColor: currentStage.color }}
                >
                  <IconComp size={22} strokeWidth={2.2} />
                </div>

                <span className="font-tech text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8]">
                  {currentStage.badge}
                </span>

                <h4 className="font-display text-xs sm:text-sm font-black uppercase tracking-wide text-white mt-0.5">
                  {currentStage.title}
                </h4>
              </div>

              {/* 4 QUADRANT ORBIT NODES (12, 3, 6, 9 O'CLOCK) */}
              {/* NODE 1: TOP (12 o'clock) */}
              <button
                type="button"
                onClick={() => {
                  setActiveOrbitIndex(0);
                  setIsPaused(true);
                }}
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all duration-300 ${
                  activeOrbitIndex === 0
                    ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-lg shadow-[#0066FF]/40 scale-110'
                    : 'bg-white text-[#0B2545] border-slate-300 hover:border-[#0066FF]'
                }`}
              >
                <span className="text-xs">🔥</span>
                <span className="font-display text-[11px] font-extrabold uppercase tracking-wide">
                  01. BEGINNER
                </span>
              </button>

              {/* NODE 2: RIGHT (3 o'clock) */}
              <button
                type="button"
                onClick={() => {
                  setActiveOrbitIndex(1);
                  setIsPaused(true);
                }}
                className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all duration-300 ${
                  activeOrbitIndex === 1
                    ? 'bg-[#D97706] text-white border-[#D97706] shadow-lg shadow-[#D97706]/40 scale-110'
                    : 'bg-white text-[#0B2545] border-slate-300 hover:border-[#D97706]'
                }`}
              >
                <span className="text-xs">⚡</span>
                <span className="font-display text-[11px] font-extrabold uppercase tracking-wide">
                  02. SKILLED
                </span>
              </button>

              {/* NODE 3: BOTTOM (6 o'clock) */}
              <button
                type="button"
                onClick={() => {
                  setActiveOrbitIndex(2);
                  setIsPaused(true);
                }}
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all duration-300 ${
                  activeOrbitIndex === 2
                    ? 'bg-[#059669] text-white border-[#059669] shadow-lg shadow-[#059669]/40 scale-110'
                    : 'bg-white text-[#0B2545] border-slate-300 hover:border-[#059669]'
                }`}
              >
                <span className="text-xs">🔩</span>
                <span className="font-display text-[11px] font-extrabold uppercase tracking-wide">
                  03. SPECIALIST
                </span>
              </button>

              {/* NODE 4: LEFT (9 o'clock) */}
              <button
                type="button"
                onClick={() => {
                  setActiveOrbitIndex(3);
                  setIsPaused(true);
                }}
                className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all duration-300 ${
                  activeOrbitIndex === 3
                    ? 'bg-[#9333EA] text-white border-[#9333EA] shadow-lg shadow-[#9333EA]/40 scale-110'
                    : 'bg-white text-[#0B2545] border-slate-300 hover:border-[#9333EA]'
                }`}
              >
                <span className="text-xs">🏆</span>
                <span className="font-display text-[11px] font-extrabold uppercase tracking-wide">
                  04. ADVANCED
                </span>
              </button>
            </div>
          </div>

          {/* -----------------------------------------------
              RIGHT: ACTIVE STAGE SPECIFICATION DISPLAY PANEL
          ----------------------------------------------- */}
          <div className="lg:col-span-6 bg-white rounded-2xl border-2 border-slate-300/90 shadow-[0_18px_45px_rgba(11,37,69,0.12)] overflow-hidden">
            {/* DIGITAL VOLTAGE & SALARY STRIP */}
            <div className="bg-[#0B2545] px-5 py-3 flex items-center justify-between border-b border-slate-800 text-white font-tech text-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]" />
                </span>
                <span className="font-extrabold tracking-widest text-[#38BDF8]">
                  {currentStage.voltageReadout}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold">
                <TrendingUp size={13} />
                <span>{currentStage.salaryGrowth}</span>
              </div>
            </div>

            {/* LASER SEAM ACCENT LINE */}
            <div
              className="h-[4px] transition-all duration-500"
              style={{ backgroundColor: currentStage.color }}
            />

            {/* PANEL BODY */}
            <div className="p-6 sm:p-7 space-y-5">
              <div>
                <span
                  className="font-tech text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#EBF3FE] border border-[#B1D8FF] inline-block mb-1.5"
                  style={{ color: currentStage.color }}
                >
                  {currentStage.badge}
                </span>

                <h3 className="font-display text-2xl font-black uppercase tracking-wide text-[#0B2545]">
                  {currentStage.title} Level
                </h3>
              </div>

              {/* SKILL PROGRESSION SEQUENCE (THE STEPS) */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/90">
                <span className="font-display text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2.5">
                  SKILL PROGRESSION SEQUENCE:
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  {currentStage.steps.map((stepName, stepIdx) => (
                    <div key={stepName} className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#0B2545] border border-[#B1D8FF] font-display text-xs sm:text-[13px] font-extrabold tracking-wide shadow-xs">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: currentStage.color }}
                        />
                        {stepName}
                      </span>

                      {stepIdx < currentStage.steps.length - 1 && (
                        <ChevronRight
                          size={15}
                          strokeWidth={3}
                          style={{ color: currentStage.color }}
                          className="shrink-0 animate-pulse"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* TARGET CAREER ROLES */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={14} style={{ color: currentStage.color }} />
                  <span className="font-display text-[10.5px] font-extrabold uppercase tracking-wider text-[#0B2545]">
                    TARGET CAREER OPPORTUNITIES:
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentStage.targetRoles.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-display text-xs font-bold border border-slate-200"
                    >
                      <CheckCircle2 size={12} style={{ color: currentStage.color }} />
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROGRESSION LEVEL GAUGE BAR */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs font-bold font-display uppercase text-slate-500 mb-1">
                  <span>ROADMAP PROGRESSION GAUGE</span>
                  <span style={{ color: currentStage.color }}>{currentStage.progressPercent}% MASTERED</span>
                </div>

                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div
                    className="h-full rounded-full transition-all duration-700 shadow-sm"
                    style={{
                      width: `${currentStage.progressPercent}%`,
                      backgroundColor: currentStage.color,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
