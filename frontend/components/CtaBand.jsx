'use client';

import Link from 'next/link';
import {
  MessageCircle,
  Phone,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Flame,
} from 'lucide-react';
import { site } from '@/lib/site';

export default function CtaBand({ enquireHref = '#enquire' }) {
  return (
    <section className="scroll-mt-20 bg-[#0B2545] py-10 sm:py-12 lg:py-14 text-white relative overflow-hidden border-t-2 border-[#0066FF]">
      {/* Top Laser Weld Seam Accent Line */}
      <div className="h-[4px] bg-gradient-to-r from-[#0066FF] via-[#38BDF8] to-[#F97316] absolute top-0 left-0 right-0" />

      {/* Ambient Flame & Arc Radial Light Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#0066FF]/20 via-[#38BDF8]/15 to-[#F97316]/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Industrial Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-[#38BDF8]_1px,transparent_1px] [background-size:24px_24px]" />

      <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
        {/* ===================================================
            TOP PILL BADGE
        =================================================== */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0066FF]/20 border border-[#38BDF8]/40 px-3.5 py-1 mb-3 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
          <Flame size={13} className="text-[#F97316] animate-pulse" />
          <span className="font-tech text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#38BDF8]">
            START YOUR INDUSTRIAL WELDING CAREER TODAY
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-ping" />
        </div>

        {/* ===================================================
            MAIN HEADLINE
        =================================================== */}
        <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white drop-shadow-md">
          Ready to Build Your <span className="text-weld-blue">Welding Career?</span>
        </h2>

        {/* ===================================================
            SUB-HEADLINE PIPELINE BAR
        =================================================== */}
        <div className="my-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-2 backdrop-blur-xl shadow-md">
          <span className="font-tech text-[11px] sm:text-xs font-black uppercase text-white flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-[#38BDF8]" />
            Choose Your Course
          </span>
          <span className="text-slate-600 font-extrabold hidden sm:inline">|</span>
          <span className="font-tech text-[11px] sm:text-xs font-black uppercase text-white flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-[#38BDF8]" />
            Speak to a Trainer
          </span>
          <span className="text-slate-600 font-extrabold hidden sm:inline">|</span>
          <span className="font-tech text-[11px] sm:text-xs font-black uppercase text-white flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-[#38BDF8]" />
            Visit Our Institute
          </span>
        </div>

        {/* ===================================================
            THE 3 HIGH-IMPACT ACTION BUTTONS
        =================================================== */}
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {/* BUTTON 1: WhatsApp Us */}
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 font-display text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white border border-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
            <span>WhatsApp Us</span>
          </a>

          {/* BUTTON 2: Call Now */}
          <a
            href={site.phoneHref}
            className="w-full sm:w-auto flex-1 font-display text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0B2545] text-white border border-[#38BDF8] shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Phone size={18} className="group-hover:animate-bounce" />
            <span>Call Now</span>
          </a>

          {/* BUTTON 3: Book a Counselling Session */}
          <Link
            href={enquireHref}
            className="w-full sm:w-auto flex-1 font-display text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white border border-[#FDBA74] shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Calendar size={18} className="group-hover:scale-110 transition-transform" />
            <span>Book a Counselling Session</span>
          </Link>
        </div>

        {/* ===================================================
            TRUST HIGHLIGHTS FOOTER
        =================================================== */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-tech font-bold text-slate-400 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-[#38BDF8]" />
            100% Practical Workshop Arc Time
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-[#38BDF8]" />
            ASME IX & AWS D1.1 Qualification
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#38BDF8]" />
            Irandamkattalai, Kovur, Chennai - 600128
          </span>
        </div>
      </div>
    </section>
  );
}
