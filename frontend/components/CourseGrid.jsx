'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Flame,
  Zap,
  Cable,
  Cylinder,
  Construction,
  ShieldCheck,
  Clock,
  GraduationCap,
  Wrench,
  Award,
  Briefcase,
  ChevronRight,
  Sparkles,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

/* =========================================================
   6 DIVIDED WELDING PROCESSES DATA
========================================================= */
const courseTabs = [
  {
    slug: 'arc-welding',
    id: 'arc',
    tabName: 'ARC Welding',
    processBadge: 'SMAW PROCESS',
    emoji: '🔥',
    title: 'ARC Welding (SMAW)',
    voltageReadout: '240A / 28V • SMAW ONLINE • RIG ST-01',
    codeCompliance: 'ASME SEC IX • AWS D1.1 COMPLIANT',
    icon: Flame,
    color: '#0066FF',
    accentGradient: 'from-[#0066FF] via-[#38BDF8] to-[#0B2545]',
    description:
      'Shielded Metal Arc Welding (SMAW / Stick Welding) training focusing on arc length control, electrode selection, joint fit-up, and positional welding from 1G flat to 4G overhead.',
    duration: '1 Month / 2 Months (Flexible)',
    eligibility: '10th Pass / ITI / Diploma / Any Welder Aspirant',
    practicalTraining: [
      'SMAW Arc Control & Electrode Selection',
      'Plate 1G, 2G, 3G & 4G Welding Positions',
      'Joint Fit-up, Root Pass & Heavy Bead Travel',
      'Slag Removal, Cleaning & Visual Defect Inspection',
    ],
    certification: 'AWS D1.1 / ASME IX Code Compliant Performance Certificate',
    careerOpportunities: [
      'Industrial Fabrication Welder',
      'Structural Site Erector & Maintenance Welder',
      'Heavy Machinery Repair Specialist',
    ],
  },
  {
    slug: 'tig-welding',
    id: 'tig',
    tabName: 'TIG Welding',
    processBadge: 'GTAW PRECISION',
    emoji: '⚡',
    title: 'TIG Welding (GTAW)',
    voltageReadout: '180A / 18V • GTAW PRECISION • RIG ST-02',
    codeCompliance: 'GTAW HIGH PURITY • ISO 9606 CERTIFIED',
    icon: Zap,
    color: '#9333EA',
    accentGradient: 'from-[#9333EA] via-[#C084FC] to-[#0B2545]',
    description:
      'Gas Tungsten Arc Welding (GTAW / TIG) training for high-precision, aesthetic welds on thin gauge sheet metal, carbon steel, and stainless steel high-purity piping.',
    duration: '1 Month / 2 Months',
    eligibility: '10th / ITI / Mechanical Diploma / Engineering Aspirants',
    practicalTraining: [
      'GTAW Tungsten Torch Control & Foot Pedal Control',
      'High-Purity Root Pass & Filler Wire Feeding',
      'Carbon Steel & Stainless Steel Pipe Welding Rigs',
      'Tungsten Grinding, Gas Shielding & Color Control',
    ],
    certification: 'ASME Sec IX Certified TIG Welder Performance Qualification',
    careerOpportunities: [
      'High-Purity Process Piping Welder',
      'Aerospace & Defence Component Fabricator',
      'Oil & Gas / Refinery TIG Specialist',
    ],
  },
  {
    slug: 'mig-welding',
    id: 'mig',
    tabName: 'MIG/MAG Welding',
    processBadge: 'GMAW PRODUCTION',
    emoji: '⚙️',
    title: 'MIG/MAG Welding (GMAW)',
    voltageReadout: '260A / 32V • GMAW HIGH SPEED • RIG ST-03',
    codeCompliance: 'GMAW PRODUCTION • HEAVY FABRICATION',
    icon: Cable,
    color: '#059669',
    accentGradient: 'from-[#059669] via-[#34D399] to-[#0B2545]',
    description:
      'Gas Metal Arc Welding (GMAW / MIG / MAG) high-productivity training designed for fast manufacturing, automotive plants, and heavy steel fabrication.',
    duration: '1 Month',
    eligibility: '10th / ITI / Mechanical Diploma Candidates',
    practicalTraining: [
      'GMAW Wire Feed Speed & Voltage Dialing',
      'Shielding Gas Selection (CO2 vs Argon/CO2 Mix)',
      'High-Speed Fillet & Groove Welding Positions',
      'Automotive & Sheet Metal Production Techniques',
    ],
    certification: 'Industrial Production & Heavy Manufacturing Welder Certificate',
    careerOpportunities: [
      'Automotive Manufacturing Plant Welder',
      'Heavy Equipment & Trailer Production Fabricator',
      'Structural Steel & Pressure Vessel Fabricator',
    ],
  },
  {
    slug: '6g-pipe-welding',
    id: '6g',
    tabName: '6G Pipe Welding',
    processBadge: 'ADVANCED PIPE',
    emoji: '🔩',
    title: '6G Pipe Welding (ASME IX)',
    voltageReadout: '300A / 34V • 6G PIPE RIG ACTIVE • ST-04',
    codeCompliance: 'ASME SEC IX 6G / 6GR • RADIOGRAPHY PASS',
    icon: Cylinder,
    color: '#D97706',
    accentGradient: 'from-[#D97706] via-[#FBBF24] to-[#0B2545]',
    description:
      'Elite 6G (45° fixed inclined pipe) welding qualification course using combined SMAW and GTAW processes. Designed for international high-pressure boiler and cross-country pipeline jobs.',
    duration: '45 Days / 2 Months',
    eligibility: 'Basic Welder / ITI Fitter / Experienced Welder Aspirants',
    practicalTraining: [
      'Fixed 45° Incline Pipe Rigging (6G & 6GR Restriction Ring)',
      'TIG Root Pass + SMAW Hot/Fill/Cap Passes',
      'Full Penetration Radiographic Quality Welds',
      'Visual, Bend & X-Ray Defect Analysis',
    ],
    certification: '6G ASME IX / AWS D1.1 International High-Pressure Welder Qualification',
    careerOpportunities: [
      'Offshore Rig & Oil Pipeline Welder (Gulf / Overseas)',
      'Cross-Country High-Pressure Gas Pipeline Specialist',
      'Thermal Power Plant & Refinery Boiler Welder',
    ],
  },
  {
    slug: 'structural-welding',
    id: 'structural',
    tabName: 'Structural Welding',
    processBadge: 'HEAVY FABRICATION',
    emoji: '🏗️',
    title: 'Structural Steel Welding (AWS D1.1)',
    voltageReadout: '280A / 30V • HEAVY BEAM STATION • ST-05',
    codeCompliance: 'AWS D1.1 STRUCTURAL STEEL CODE',
    icon: Construction,
    color: '#0284C7',
    accentGradient: 'from-[#0284C7] via-[#38BDF8] to-[#0B2545]',
    description:
      'Heavy structural steel welding course compliant with AWS D1.1 code. Covers I-beams, columns, heavy plates, gusset plates, and overhead 4G groove welds.',
    duration: '1 Month',
    eligibility: '10th / 12th / ITI Structural Fitter Candidates',
    practicalTraining: [
      'Heavy Steel I-Beams, Columns & Plate Fit-up',
      'Vertical 3G & Overhead 4G Full Penetration Grooves',
      'AWS D1.1 Ultrasonic & Magnetic Particle Testing Prep',
      'Structural Blueprint & WPS Reading',
    ],
    certification: 'AWS D1.1 Heavy Structural Steel Welder Certification',
    careerOpportunities: [
      'High-Rise Commercial Building Steel Erector',
      'Shipyard, Heavy Bridge & Crane Girder Welder',
      'Infrastructure & Stadium Construction Welder',
    ],
  },
  {
    slug: 'stainless-steel-welding',
    id: 'stainless',
    tabName: 'Stainless Steel',
    processBadge: 'EXOTIC METALS',
    emoji: '🥈',
    title: 'Stainless Steel & Exotic Metals',
    voltageReadout: '190A / 20V • EXOTIC ALLOY PURGING • ST-06',
    codeCompliance: 'EXOTIC ALLOYS • BACK PURGING RIG',
    icon: ShieldCheck,
    color: '#7C3AED',
    accentGradient: 'from-[#7C3AED] via-[#A78BFA] to-[#0B2545]',
    description:
      'Specialized GTAW & GMAW training for stainless steel (304, 316L, Duplex) and exotic alloys. Focuses on heat input control, purging gas setups, and oxide-free clean welds.',
    duration: '1 Month',
    eligibility: 'Basic TIG/MIG Experience / ITI / Mechanical Diploma',
    practicalTraining: [
      'SS 304 / 316L Sheet & Pipe Welding Setup',
      'Back Purging Gas Chamber & Damming Technique',
      'Heat Input Control & Sugarization Prevention',
      'Pickling & Passivation Post-Weld Cleaning',
    ],
    certification: 'Exotic Alloy & Stainless Steel Welding Specialist Certificate',
    careerOpportunities: [
      'Pharmaceutical Equipment & Cleanroom Welder',
      'Dairy, Beverage & Food Processing Plant Welder',
      'Chemical Process & Desalination Plant Welder',
    ],
  },
];

export default function CourseGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-Cycle tabs every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % courseTabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentCourse = courseTabs[activeTab];
  const IconComponent = currentCourse.icon;

  return (
    <section id="courses" className="scroll-mt-20 bg-slate-100/90 py-14 sm:py-16 lg:py-20 border-b border-slate-200">
      <div className="container-site">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#CBD5E1] shadow-sm px-4 py-1.5 mb-4 cursor-default">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF3FE] text-[#0066FF]">
              <Cpu size={13} className="animate-pulse" />
            </span>
            <span className="font-display text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#0B2545]">
              SPECIALIZED INDUSTRIAL TRAINING • 6 WELDING PROCESSES
            </span>
          </div>

          <h2 className="font-display font-extrabold uppercase tracking-tight text-[#0B2545] text-2xl sm:text-3xl lg:text-[2.25rem]">
            Welding Courses & <span className="text-weld-blue">Specifications</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Select any welding process tab below to inspect full course duration, eligibility, practical shop modules, code certification, and career outcomes.
          </p>
        </div>

        {/* ===================================================
            TOP 6-TAB TORCH SELECTOR BAR
        =================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {courseTabs.map((tab, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(idx);
                  setIsPaused(true);
                }}
                className={`group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-display text-xs sm:text-[13px] font-extrabold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'bg-[#0B2545] text-white shadow-lg shadow-[#0B2545]/20 scale-105 border-2 border-[#0066FF]'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <span className="text-sm sm:text-base">{tab.emoji}</span>
                <span>{tab.tabName}</span>
                {isActive && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ===================================================
            MASTER CONTROL DASHBOARD DISPLAY PLATE
        =================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-5xl mx-auto bg-white rounded-2xl border-2 border-slate-300/90 shadow-[0_20px_50px_rgba(11,37,69,0.14)] overflow-hidden transition-all duration-500 relative"
        >
          {/* DIGITAL VOLTAGE METER STRIP */}
          <div className="bg-[#0B2545] px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between border-b border-slate-800 text-white font-tech gap-2">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]" />
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#38BDF8]">
                {currentCourse.voltageReadout}
              </span>
            </div>

            <span className="text-[10px] sm:text-xs font-extrabold tracking-widest text-slate-300 bg-slate-800/90 px-3 py-1 rounded-md border border-slate-700">
              {currentCourse.codeCompliance}
            </span>
          </div>

          {/* LASER SEAM ACCENT BAR */}
          <div
            className={`h-[4.5px] bg-gradient-to-r ${currentCourse.accentGradient} transition-all duration-500`}
          />

          {/* DASHBOARD BODY (2 COLUMNS) */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* -----------------------------------------------
                LEFT COLUMN: TITLE & 3 CORE SPECS
            ----------------------------------------------- */}
            <div className="lg:col-span-6 space-y-6">
              {/* Header Title & Process Badge */}
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-2xl">{currentCourse.emoji}</span>
                  <span
                    className="font-tech text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#EBF3FE] border border-[#B1D8FF]"
                    style={{ color: currentCourse.color }}
                  >
                    {currentCourse.processBadge}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#0B2545]">
                  {currentCourse.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  {currentCourse.description}
                </p>
              </div>

              {/* 3 Core Specs Box */}
              <div className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-200/90">
                {/* 1. DURATION */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EBF3FE] text-[#0066FF] mt-0.5">
                    <Clock size={16} strokeWidth={2.3} />
                  </div>
                  <div>
                    <span className="font-display text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                      COURSE DURATION
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#0B2545]">
                      {currentCourse.duration}
                    </span>
                  </div>
                </div>

                {/* 2. ELIGIBILITY */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#EBF3FE] text-[#0066FF] mt-0.5">
                    <GraduationCap size={16} strokeWidth={2.3} />
                  </div>
                  <div>
                    <span className="font-display text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                      ENTRY ELIGIBILITY
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-700">
                      {currentCourse.eligibility}
                    </span>
                  </div>
                </div>

                {/* 3. CERTIFICATION */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#EBF3FE] text-[#0066FF] mt-0.5">
                    <Award size={16} strokeWidth={2.3} />
                  </div>
                  <div>
                    <span className="font-display text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                      CODE CERTIFICATION
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-700">
                      {currentCourse.certification}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* -----------------------------------------------
                RIGHT COLUMN: MODULES, CAREER & ACTION BUTTON
            ----------------------------------------------- */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
              {/* Practical Workshop Modules */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Wrench size={15} style={{ color: currentCourse.color }} />
                  <h4 className="font-display text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0B2545]">
                    PRACTICAL WORKSHOP MODULES:
                  </h4>
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/90">
                  {currentCourse.practicalTraining.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-slate-700">
                      <CheckCircle2 size={15} style={{ color: currentCourse.color }} className="shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={15} style={{ color: currentCourse.color }} />
                  <h4 className="font-display text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0B2545]">
                    CAREER OPPORTUNITIES:
                  </h4>
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/90">
                  {currentCourse.careerOpportunities.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-slate-700">
                      <CheckCircle2 size={15} style={{ color: currentCourse.color }} className="shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-2">
                <Link
                  href={`/courses/${currentCourse.slug}`}
                  className="w-full inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#0B2545] hover:bg-[#0066FF] text-white font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#0B2545]/20 hover:shadow-[#0066FF]/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Zap size={15} className="animate-pulse" />
                  VIEW {currentCourse.tabName.toUpperCase()} SPECIFICATION
                  <ChevronRight size={16} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
