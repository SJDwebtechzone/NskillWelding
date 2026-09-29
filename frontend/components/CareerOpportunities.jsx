'use client';

import { useState } from 'react';
import {
  Briefcase,
  Globe,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Flame,
  Award,
  Sparkles,
  ArrowRight,
  MapPin,
  Building2,
  GraduationCap,
} from 'lucide-react';

/* =========================================================
   10 CORE CAREER ROLES DATA
========================================================= */
const careerRoles = [
  {
    id: 'tig-welder',
    code: '01',
    title: 'TIG Welder',
    process: 'GTAW (Gas Tungsten Arc)',
    level: 'High Precision Specialist',
    salaryIndia: '₹25,000 - ₹45,000 / mo',
    salaryGulf: '$1,200 - $2,500 / mo',
    desc: 'Specializes in high-purity argon gas tungsten arc welding for stainless steel, aluminum, and exotic alloy process piping in refineries & food processing plants.',
    certification: 'ASME IX GTAW / ISO 9606',
    topSectors: 'Oil & Gas, Food & Pharma, Aerospace',
  },
  {
    id: 'mig-welder',
    code: '02',
    title: 'MIG Welder',
    process: 'GMAW / FCAW (Wire Feed)',
    level: 'High Speed Production',
    salaryIndia: '₹22,000 - ₹40,000 / mo',
    salaryGulf: '$1,000 - $2,200 / mo',
    desc: 'Operates continuous wire feed gas metal arc welding rigs for heavy manufacturing, automotive frames & structural production lines.',
    certification: 'AWS D1.1 / ISO 3834',
    topSectors: 'Automotive, Heavy Machinery, Fabrication',
  },
  {
    id: '6g-pipe-welder',
    code: '03',
    title: '6G Pipe Welder',
    process: 'SMAW + GTAW 6G Incline',
    level: 'Master Elite Welder',
    salaryIndia: '₹35,000 - ₹75,000 / mo',
    salaryGulf: '$1,800 - $3,500 / mo',
    desc: 'Master of fixed 45° incline high-pressure pipe welding for oil refineries, cross-country pipelines, and chemical processing plants.',
    certification: 'ASME IX 6G / API 1104',
    topSectors: 'Refineries, Cross-Country Pipelines, Offshore Rigs',
  },
  {
    id: 'structural-welder',
    code: '04',
    title: 'Structural Welder',
    process: 'SMAW / FCAW Heavy Plate',
    level: 'Heavy Infrastructure',
    salaryIndia: '₹25,000 - ₹45,000 / mo',
    salaryGulf: '$1,200 - $2,400 / mo',
    desc: 'Welds heavy structural steel beams, high-rise building frames, bridges, and industrial crane booms.',
    certification: 'AWS D1.1 Structural Code',
    topSectors: 'Bridges, Skyscrapers, Commercial Buildings',
  },
  {
    id: 'fabricator',
    code: '05',
    title: 'Fabricator',
    process: 'Fit-up & Cutting Assembly',
    level: 'Workshop Specialist',
    salaryIndia: '₹22,000 - ₹38,000 / mo',
    salaryGulf: '$1,100 - $2,000 / mo',
    desc: 'Reads WPS engineering drawings, cuts, bevels, clamps, and fits structural plate joints prior to final welding.',
    certification: 'Blueprint & WPS Reading',
    topSectors: 'Heavy Fabrication Shops, Shipyards',
  },
  {
    id: 'pipe-fitter',
    code: '06',
    title: 'Pipe Fitter',
    process: 'Piping Layout & Spooling',
    level: 'Piping Specialist',
    salaryIndia: '₹24,000 - ₹42,000 / mo',
    salaryGulf: '$1,200 - $2,300 / mo',
    desc: 'Executes pipe alignment, beveling, gap spacing, purge chamber setup, and isometric drawing fitting for pipe welders.',
    certification: 'Piping Isometric & WPS Prep',
    topSectors: 'Process Plants, Offshore Facilities',
  },
  {
    id: 'welding-supervisor',
    code: '07',
    title: 'Welding Supervisor',
    process: 'Production & Team Lead',
    level: 'Managerial & Shop Lead',
    salaryIndia: '₹40,000 - ₹85,000 / mo',
    salaryGulf: '$2,200 - $4,200 / mo',
    desc: 'Manages workshop welder teams, assigns WPS jobs, enforces safety PPE compliance, and oversees production schedules.',
    certification: 'AWS CWS / Senior Inspector',
    topSectors: 'Manufacturing Facilities, EPC Contractors',
  },
  {
    id: 'welding-inspector',
    code: '08',
    title: 'Welding Inspector',
    process: 'Visual & Code Audit',
    level: 'Quality Certified Auditor',
    salaryIndia: '₹45,000 - ₹95,000 / mo',
    salaryGulf: '$2,500 - $5,000 / mo',
    desc: 'Inspects weld bead geometry, undercut, porosity, verifies WPS parameters, and signs off code compliance certificates.',
    certification: 'AWS CWI / CSWIP 3.1',
    topSectors: 'Inspection Agencies, Oil & Gas EPC',
  },
  {
    id: 'qa-qc-professional',
    code: '09',
    title: 'QA/QC Professional',
    process: 'Quality Engineering',
    level: 'Corporate Quality Lead',
    salaryIndia: '₹50,000 - ₹1,10,000 / mo',
    salaryGulf: '$3,000 - $6,000 / mo',
    desc: 'Drafts WPS/PQR procedure qualifications, manages NDT audit reports, and ensures strict international code compliance.',
    certification: 'ISO 9001 / AWS QC1',
    topSectors: 'Global EPC Companies, Energy Megaprojects',
  },
  {
    id: 'ndt-technician',
    code: '10',
    title: 'NDT Technician',
    process: 'UT, RT, MT, PT Testing',
    level: 'Non-Destructive Testing',
    salaryIndia: '₹30,000 - ₹65,000 / mo',
    salaryGulf: '$1,800 - $3,800 / mo',
    desc: 'Performs non-destructive testing using Ultrasonic (UT), Radiographic (RT), Magnetic (MT), and Dye Penetrant (PT) flaw detectors.',
    certification: 'ASNT Level II (VT/UT/MT/PT)',
    topSectors: 'Testing Laboratories, Marine & Aviation',
  },
];

/* 3 Global Career Deployment Destinations */
const globalDestinations = [
  {
    id: 'india',
    flag: '🇮🇳',
    region: 'India Opportunities',
    badge: 'DOMESTIC INDUSTRIAL HUB',
    companies: 'L&T Heavy Engineering, Hyundai, Schwing Stetter, Godrej & Boyce, Thermax, ISGEC',
    desc: 'Immediate placement in major manufacturing, power plant construction, metro rail & structural fabrication sectors across India.',
  },
  {
    id: 'gulf',
    flag: '🌴',
    region: 'Gulf Opportunities',
    badge: 'HIGH TAX-FREE SALARIES',
    companies: 'Saudi Aramco projects, ADNOC UAE, QatarEnergy, Kuwait Oil Company, Oman PDO',
    desc: 'Direct client trade test preparation for high-paying overseas contracts in Saudi Arabia, UAE, Qatar, Kuwait, Oman & Bahrain.',
  },
  {
    id: 'international',
    flag: '🌏',
    region: 'International Opportunities',
    badge: 'GLOBAL SHIPYARDS & EPC',
    companies: 'European Shipyards, Singapore Marine Rigs, Malaysia EPC, Australia & Canada Infrastructure',
    desc: 'International welder qualification (ISO 9606 / ASME IX) opening doors to global offshore marine & energy infrastructure contracts.',
  },
];

export default function CareerOpportunities() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(2); // Default 6G Pipe Welder

  const selectedRole = careerRoles[activeRoleIndex] || careerRoles[0];

  return (
    <section id="careers" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="container-site relative z-10">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 mb-4 shadow-sm">
            <Briefcase size={14} className="text-[#0066FF]" />
            <span className="font-tech text-xs font-extrabold uppercase tracking-widest text-[#0B2545]">
              CAREER ROADMAP • 10 CORE ROLES
            </span>
          </div>

          <h2 className="font-display font-extrabold uppercase tracking-tight text-[#0B2545] text-3xl sm:text-4xl lg:text-5xl">
            Where Can Welding Skills <span className="text-weld-blue">Take You?</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Explore 10 high-paying industrial career pathways, certification requirements, and salary benchmarks across India and overseas.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-[#0066FF] rounded-full" />
            <div className="h-1 w-3 bg-[#38BDF8] rounded-full" />
          </div>
        </div>

        {/* ===================================================
            10 ROLES INTERACTIVE TAB MATRIX & FEATURE SHOWCASE
        =================================================== */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* TOP ROLE SELECTOR GRID (ALL 10 ROLES VISIBLE) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
            {careerRoles.map((role, idx) => {
              const isActive = idx === activeRoleIndex;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setActiveRoleIndex(idx)}
                  className={`group relative p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-lg shadow-blue-900/20 scale-[1.02]'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span
                      className={`font-tech text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#0066FF] text-white'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-[#0066FF]'
                      }`}
                    >
                      {role.code}
                    </span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-ping" />
                    )}
                  </div>

                  <div className={`font-display text-xs sm:text-sm font-bold uppercase truncate ${
                    isActive ? 'text-white' : 'text-[#0B2545]'
                  }`}>
                    {role.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE ROLE DETAIL DISPLAY PANEL */}
          <div className="rounded-3xl bg-white border-2 border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT SIDE: ROLE DETAILS & DESCRIPTION (7 COLS) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="font-tech text-xs font-black uppercase tracking-widest px-3 py-1 rounded-md bg-[#0066FF] text-white">
                    ROLE {selectedRole.code} OF 10
                  </span>
                  <span className="font-tech text-xs font-bold text-slate-600 uppercase tracking-wider px-3 py-1 rounded-md bg-slate-100 border border-slate-200">
                    {selectedRole.level}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#0B2545] tracking-tight">
                  {selectedRole.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-xs font-tech font-bold text-weld-blue uppercase">
                  <Flame size={14} className="text-[#0066FF]" />
                  <span>PROCESS: {selectedRole.process}</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {selectedRole.desc}
                </p>

                {/* Key Attributes */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-tech font-bold text-slate-400 uppercase block">Required Certification</span>
                      <span className="text-xs font-bold text-slate-800">{selectedRole.certification}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Building2 size={18} className="text-[#0066FF] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-tech font-bold text-slate-400 uppercase block">Primary Industry Sectors</span>
                      <span className="text-xs font-bold text-slate-800">{selectedRole.topSectors}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 font-tech text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-xl bg-[#0066FF] text-white hover:bg-blue-700 transition-colors shadow-md"
                >
                  <span>Get Counseled For {selectedRole.title}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: SALARY & PLACEMENT TELEMETRY CARDS (5 COLS) */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle Blue Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 rounded-full filter blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 text-xs font-tech font-bold text-weld-blue uppercase tracking-wider mb-5">
                  <TrendingUp size={16} />
                  <span>INDUSTRY SALARY BENCHMARKS</span>
                </div>

                {/* India Salary Card */}
                <div className="mb-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-tech font-bold text-slate-300 uppercase flex items-center gap-1.5">
                      <span className="text-base">🇮🇳</span> India Domestic Placement
                    </span>
                    <span className="text-[10px] font-tech uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Monthly
                    </span>
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-black text-white mt-1">
                    {selectedRole.salaryIndia}
                  </div>
                </div>

                {/* Gulf Salary Card */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-tech font-bold text-weld-blue uppercase flex items-center gap-1.5">
                      <span className="text-base">🌴</span> Gulf & Overseas Tax-Free
                    </span>
                    <span className="text-[10px] font-tech uppercase px-2 py-0.5 rounded bg-blue-500/20 text-[#38BDF8] border border-blue-500/30">
                      Tax Free
                    </span>
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-black text-weld-blue mt-1">
                    {selectedRole.salaryGulf}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>100% Trade Test & Placement Assistance Provided</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===================================================
            GLOBAL CAREER DEPLOYMENT REGIONS (INDIA | GULF | INTERNATIONAL)
        =================================================== */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0B2545]">
              India | Gulf | International Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Where our certified graduates get hired across India, Gulf countries, and international shipyards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {globalDestinations.map((dest) => (
              <div
                key={dest.id}
                className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-3xl">{dest.flag}</span>
                    <span className="font-tech text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-[#0066FF] border border-blue-200">
                      {dest.badge}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-black uppercase text-[#0B2545] group-hover:text-[#0066FF] transition-colors">
                    {dest.region}
                  </h4>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                    {dest.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="font-tech text-[10px] font-extrabold text-[#0B2545] uppercase tracking-wider block mb-1">
                    RECRUITER NETWORKS & COMPANIES:
                  </span>
                  <p className="text-[11px] text-slate-500 font-medium leading-snug">
                    {dest.companies}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
