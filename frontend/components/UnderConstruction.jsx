import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight, Home, Wrench, BookOpen } from 'lucide-react';
import { site } from '@/lib/site';

export default function UnderConstruction({ pageTitle = 'Section Under Construction' }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white min-h-[70vh] flex items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:36px_36px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/20 blur-3xl pointer-events-none"
      />

      <div className="container-site max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
          <Wrench size={14} className="text-amber-400" />
          <span>Technical Module In Progress</span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
          {pageTitle} <span className="text-weld-blue">Updating</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
          This module is currently being updated with our latest 2026 welding course syllabi, practical booth schedules, and welder qualification testing protocols (AWS D1.1, ASME IX, ISO 9606).
        </p>

        {/* Quick Contact Box */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0066FF]/20 text-[#38BDF8] border border-[#0066FF]/30">
              <Phone size={18} />
            </div>
            <div>
              <span className="block text-xs font-bold uppercase text-slate-400">Admissions Helpline</span>
              <a href={site.phoneHref} className="font-display font-extrabold text-sm text-white hover:text-cyan-300">
                {site.phone1}
              </a>
              <span className="block text-[11px] text-slate-400">Mon - Sat: 8:30 AM - 6:30 PM</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <MessageCircle size={18} />
            </div>
            <div>
              <span className="block text-xs font-bold uppercase text-slate-400">WhatsApp Desk</span>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-extrabold text-sm text-emerald-400 hover:underline"
              >
                Instant Course &amp; Fee Details
              </a>
              <span className="block text-[11px] text-slate-400">Available 24/7</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0B2545] hover:bg-[#0066FF] px-6 py-3.5 font-display text-xs font-extrabold uppercase tracking-wider text-white transition-all shadow-lg"
          >
            <Home size={15} /> Return to Homepage
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0066FF] hover:bg-cyan-500 px-6 py-3.5 font-display text-xs font-extrabold uppercase tracking-wider text-white transition-all shadow-lg"
          >
            <BookOpen size={15} /> View Certified Courses
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 font-display text-xs font-extrabold uppercase tracking-wider text-slate-200 hover:border-slate-500 hover:text-white transition-all"
          >
            Contact Desk <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
