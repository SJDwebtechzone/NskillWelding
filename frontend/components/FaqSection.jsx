'use client';

import { useState } from 'react';
import {
  ChevronDown,
  Search,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Briefcase,
  UserCheck,
} from 'lucide-react';

/* =========================================================
   12 COMPREHENSIVE FAQ DATA
========================================================= */
export const fullFaqData = [
  {
    id: 1,
    category: 'eligibility',
    question: 'What is the eligibility for welding training?',
    answer: 'Our training programs are open to 10th pass, 12th pass, ITI, Diploma, Mechanical Engineering graduates, and anyone above 18 years old passionate about building a skilled technical career in welding. No prior welding experience is required for our beginner foundation courses.',
    highlights: ['Open to 10th/12th/ITI/Diploma/Degree', 'No prior welding experience needed', 'Age 18+ eligible'],
  },
  {
    id: 2,
    category: 'courses',
    question: 'How long is the 6G welding course?',
    answer: 'The 6G Pipe Welding course duration ranges from 30 days to 60 days depending on your starting skill level (1G-4G background) and daily practical arc time selection. Intensive fast-track modules are also available for working professionals seeking quick qualification.',
    highlights: ['30 to 60 Days Duration', 'Fast-Track Modules Available', 'Max Hands-on 6G Arc Time'],
  },
  {
    id: 3,
    category: 'courses',
    question: 'Do you provide practical training?',
    answer: 'Yes! Over 80% to 90% of your total course time is spent on actual hands-on welding practice inside individual welding booths. Every student gets dedicated machine access for TIG, MIG/MAG, ARC, and 6G fixed pipe setups under AWS-certified instructor supervision.',
    highlights: ['80%-90% Hands-on Practical Time', '100% Individual Welding Booths', 'AWS Certified Master Instructors'],
  },
  {
    id: 4,
    category: 'certification',
    question: 'Do you provide certificates?',
    answer: 'Yes, all successful graduates receive an official National Institute of Welding Course Completion Certificate. Additionally, we provide third-party NDT (VT/UT/MT/PT) and Welder Performance Qualification (WPQR) certification support conforming to ASME Section IX, AWS D1.1, and ISO 9606 standards.',
    highlights: ['NIW Official Course Certificate', 'ASME IX / AWS D1.1 WPQR Support', 'NDT Inspection Certification'],
  },
  {
    id: 5,
    category: 'placement',
    question: 'Do you provide placement assistance?',
    answer: 'Yes, we provide 100% career & placement guidance. Our dedicated placement cell connects qualified welders with top manufacturing companies, oil refineries, shipyards, structural steel fabricators, and EPC contractors in India and abroad.',
    highlights: ['Dedicated Placement Assistance', 'Corporate Client Interviews', 'Resume & Trade Test Prep'],
  },
  {
    id: 6,
    category: 'eligibility',
    question: 'Can beginners join?',
    answer: 'Absolutely! We specialize in training complete beginners. You will start with basic safety, arc physics, and 1G flat plate welding before progressing step-by-step to 2G, 3G, 4G, 5G, and 6G pipe positions.',
    highlights: ['Step-by-Step Learning Track', '1G to 6G Progression', 'Zero Prior Experience Required'],
  },
  {
    id: 7,
    category: 'eligibility',
    question: 'Is accommodation available?',
    answer: 'Yes, hostel and room accommodation assistance is available near our SIDCO Industrial Estate campus in Ambattur, Chennai for candidates arriving from other states and overseas.',
    highlights: ['Hostel & Room Assistance', 'Near Ambattur Campus', 'Outstation Candidate Support'],
  },
  {
    id: 8,
    category: 'placement',
    question: 'Do you provide Gulf job assistance?',
    answer: 'Yes! We specialize in Gulf client trade test preparation and qualification for Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain. We assist candidates in passing client witness tests under ASME IX and API 1104 standards.',
    highlights: ['Gulf Client Trade Test Prep', 'Saudi / UAE / Qatar / Kuwait Guidance', 'ASME IX Witness Test Prep'],
  },
  {
    id: 9,
    category: 'courses',
    question: 'What is the difference between TIG and MIG welding?',
    answer: 'TIG (GTAW) uses a non-consumable tungsten electrode with separate filler metal for high-purity, precise, clean welds on stainless steel and thin alloys. MIG (GMAW) continuously feeds wire through a torch, making it much faster for structural fabrication and heavy steel assembly.',
    highlights: ['TIG: High-Purity & Stainless Steel', 'MIG: High-Speed Production & Fabrication', 'Both Covered in Practical Labs'],
  },
  {
    id: 10,
    category: 'eligibility',
    question: 'Which welding course is best for beginners?',
    answer: 'The ARC (SMAW) + TIG (GTAW) Combination Course or Basic SMAW Course is the recommended starting point. SMAW teaches fundamental arc length and puddle control, providing a strong foundation that carries over to all other advanced processes.',
    highlights: ['SMAW + GTAW Combination Recommended', 'Master Fundamental Puddle Control', 'Seamless Transition to 6G Pipe'],
  },
  {
    id: 11,
    category: 'certification',
    question: 'What welding codes and standards do you cover?',
    answer: 'Our training and welder qualification procedures align strictly with AWS D1.1 (Structural Steel Welding), ASME Section IX (Boilers & Pressure Vessels), API 1104 (Cross-Country Pipelines), and ISO 9606.',
    highlights: ['AWS D1.1 Structural Code', 'ASME Section IX Pressure Code', 'API 1104 Pipeline Standard'],
  },
  {
    id: 12,
    category: 'courses',
    question: 'What safety equipment (PPE) is provided during training?',
    answer: 'Student safety is our top priority. We provide auto-darkening welding helmets (Shade 9-13), heavy split cowhide leather jackets, welding gloves, aprons, spats, and protective eyewear for 100% PPE compliance.',
    highlights: ['Auto-Darkening Helmet (Shade 9-13)', 'Heavy Leather Protective Gear', '100% Workshop PPE Compliance'],
  },
];

/* Category Filter Pills */
const faqCategories = [
  { id: 'all', label: 'ALL QUESTIONS (12)', icon: HelpCircle },
  { id: 'eligibility', label: 'ELIGIBILITY & ADMISSION', icon: UserCheck },
  { id: 'courses', label: 'COURSES & PRACTICALS', icon: BookOpen },
  { id: 'certification', label: 'CERTIFICATES & CODES', icon: ShieldCheck },
  { id: 'placement', label: 'PLACEMENT & GULF JOBS', icon: Briefcase },
];

export default function FaqSection({ customFaqs }) {
  const [openId, setOpenId] = useState(1); // Default Q1 open

  // Use fullFaqData if available or fallback to customFaqs
  const dataToUse = customFaqs && customFaqs.length >= 8 ? customFaqs : fullFaqData;

  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50/90 py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
      <div className="container-site relative z-10">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-[#CBD5E1] px-4 py-1.5 mb-4 shadow-sm">
            <HelpCircle size={14} className="text-[#0066FF] animate-pulse" />
            <span className="font-tech text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.08em] text-[#0B2545]">
              FREQUENTLY ASKED QUESTIONS • EVERYTHING YOU NEED TO KNOW
            </span>
            <span className="h-2 w-2 rounded-full bg-[#0066FF] animate-ping" />
          </div>

          <h2 className="font-display font-extrabold uppercase tracking-tight text-[#0B2545] text-3xl sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-weld-blue">Questions</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Find clear, authoritative answers about our welding courses, 6G pipe qualification, practical workshop hours, certificates & Gulf job placement.
          </p>

          {/* Accent Line */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-l from-[#0066FF] to-transparent rounded-full" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#0066FF] shadow-[0_0_10px_#0066FF] animate-ping" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#0066FF] to-transparent rounded-full" />
          </div>
        </div>

        {/* ===================================================
            ULTRA-PREMIUM NON-CARD ACCORDION MATRIX (2 COLUMNS)
        =================================================== */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {dataToUse.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const qNum = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#0066FF] shadow-xl shadow-[#0066FF]/10 scale-[1.01]'
                    : 'bg-white border-slate-200/90 hover:border-[#0066FF] hover:shadow-md'
                }`}
              >
                {/* Top Active Accent Line */}
                {isOpen && (
                  <div className="h-[3.5px] bg-gradient-to-r from-[#0066FF] via-[#38BDF8] to-[#0B2545]" />
                )}

                {/* Accordion Question Header Toggle */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Question Number Badge */}
                    <span className={`font-tech text-xs font-black uppercase px-2.5 py-1 rounded-lg shrink-0 transition-colors ${
                      isOpen ? 'bg-[#0066FF] text-white shadow-sm' : 'bg-slate-100 text-slate-700'
                    }`}>
                      Q{qNum}
                    </span>

                    <h3 className={`font-display text-sm sm:text-base font-extrabold uppercase leading-snug transition-colors ${
                      isOpen ? 'text-[#0066FF]' : 'text-[#0B2545]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Chevron Icon */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 ${
                    isOpen ? 'bg-[#0066FF] text-white border-[#0066FF] rotate-180' : 'bg-slate-100 text-[#0B2545] border-slate-200'
                  }`}>
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-[#EBF3FE]/40 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {faq.answer}
                    </p>

                    {/* Highlights Bullet List */}
                    {faq.highlights && faq.highlights.length > 0 && (
                      <div className="mt-3.5 pt-3 border-t border-slate-200/60 flex flex-wrap items-center gap-2">
                        {faq.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="font-tech text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white text-[#0B2545] border border-slate-200 shadow-2xs flex items-center gap-1"
                          >
                            <CheckCircle2 size={11} className="text-[#0066FF]" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
