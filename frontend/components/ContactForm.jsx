'use client';
import { useState } from 'react';
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Phone,
  User,
  Mail,
  Clock,
  Sparkles,
  Flame,
  Activity,
  Cpu,
  Award,
  ChevronDown,
} from 'lucide-react';

const COURSE_OPTIONS = [
  { id: '6g', label: '6G Pipe Welding', icon: Flame },
  { id: 'tig', label: 'TIG / Argon Arc', icon: Zap },
  { id: 'mig', label: 'MIG / MAG Welding', icon: Cpu },
  { id: 'arc', label: 'SMAW Arc Welding', icon: Activity },
  { id: 'wps', label: 'WPS / PQR Cert', icon: Award },
  { id: 'corp', label: 'Corporate Training', icon: ShieldCheck },
];

const EXPERIENCE_LEVELS = [
  'Fresher (Beginner Welder)',
  'ITI Student / Graduate',
  'Diploma / B.E Mechanical Engineer',
  'Working Welder (Up-skilling)',
  'Corporate / Employer Representative',
];

const TIME_SLOTS = [
  'Morning (9:00 AM - 12:00 PM)',
  'Afternoon (12:00 PM - 4:00 PM)',
  'Evening (4:00 PM - 7:00 PM)',
  'Instant WhatsApp Callback',
];

export default function ContactForm() {
  const [selectedCourse, setSelectedCourse] = useState('6G Pipe Welding');
  const [form, setForm] = useState({
    full_name: '',
    whatsapp: '',
    email: '',
    experience: '',
    preferred_slot: 'Morning (9:00 AM - 12:00 PM)',
    message: '',
  });

  const [state, setState] = useState({ status: 'idle', message: '', fields: {} });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setState({ status: 'loading', message: '', fields: {} });

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          interest: selectedCourse,
          source_page: '/contact',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setState({
          status: 'error',
          message: data.error || 'Submission failed. Please call our admissions desk.',
          fields: data.fields || {},
        });
        return;
      }

      setState({
        status: 'success',
        message: data.message || 'Thank you! Our technical admissions officer will call or WhatsApp you shortly.',
        fields: {},
      });

      setForm({
        full_name: '',
        whatsapp: '',
        email: '',
        experience: '',
        preferred_slot: 'Morning (9:00 AM - 12:00 PM)',
        message: '',
      });
    } catch {
      setState({
        status: 'error',
        message: 'Network error. Please call or WhatsApp +91 81100 00330 directly.',
        fields: {},
      });
    }
  }

  const f = state.fields;

  if (state.status === 'success') {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-8 text-slate-900 shadow-xl">
        <div className="flex flex-col items-start gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500 text-white shadow-lg">
            <CheckCircle2 size={32} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold uppercase text-emerald-900 tracking-wide">
              Technical Inquiry Received!
            </h3>
            <p className="mt-2 text-sm text-emerald-800 leading-relaxed max-w-lg">
              {state.message}
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="https://wa.me/918110000330?text=Hi%20NIW%20Team%2C%20I%20just%20submitted%20a%20contact%20enquiry%20on%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shadow-md"
            >
              Open WhatsApp Chat
            </a>
            <button
              type="button"
              onClick={() => setState({ status: 'idle', message: '', fields: {} })}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-all"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all">
      {/* Form Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0066FF]">
          <Zap size={14} /> Send Direct Message
        </div>
        <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-[#0B2545] sm:text-3xl">
          Technical &amp; <span className="text-[#0066FF]">Admission Inquiry</span>
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
          Select your interested welding module below for instant syllabus, fee details, and batch dates.
        </p>
      </div>

      {/* Course Selection Badges */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
          Select Interested Module:
        </label>
        <div className="flex flex-wrap gap-2">
          {COURSE_OPTIONS.map((course) => {
            const Icon = course.icon;
            const isSelected = selectedCourse === course.label;
            return (
              <button
                key={course.id}
                type="button"
                onClick={() => setSelectedCourse(course.label)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/25 scale-[1.02]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon size={14} className={isSelected ? 'text-white' : 'text-[#0066FF]'} />
                <span>{course.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Input Fields */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name *
            </label>
            <div className={`flex items-center rounded-xl border bg-slate-50 px-3.5 ${f.full_name ? 'border-red-500' : 'border-slate-300 focus-within:border-[#0066FF] focus-within:bg-white'}`}>
              <User size={16} className="text-slate-400 shrink-0" />
              <input
                id="form-name"
                type="text"
                required
                placeholder="Enter your full name"
                value={form.full_name}
                onChange={set('full_name')}
                className="h-11 w-full bg-transparent px-3 text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            {f.full_name && <p className="mt-1 text-[11px] text-red-500">{f.full_name}</p>}
          </div>

          {/* WhatsApp / Phone */}
          <div>
            <label htmlFor="form-wa" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              WhatsApp / Phone Number *
            </label>
            <div className={`flex items-center rounded-xl border bg-slate-50 px-3.5 ${f.whatsapp ? 'border-red-500' : 'border-slate-300 focus-within:border-[#0066FF] focus-within:bg-white'}`}>
              <Phone size={16} className="text-slate-400 shrink-0" />
              <input
                id="form-wa"
                type="tel"
                required
                placeholder="+91 81100 00330"
                value={form.whatsapp}
                onChange={set('whatsapp')}
                className="h-11 w-full bg-transparent px-3 text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            {f.whatsapp && <p className="mt-1 text-[11px] text-red-500">{f.whatsapp}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email Address */}
          <div>
            <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address (Optional)
            </label>
            <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-3.5 focus-within:border-[#0066FF] focus-within:bg-white">
              <Mail size={16} className="text-slate-400 shrink-0" />
              <input
                id="form-email"
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={set('email')}
                className="h-11 w-full bg-transparent px-3 text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label htmlFor="form-exp" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Your Background / Experience
            </label>
            <div className="relative flex items-center rounded-xl border border-slate-300 bg-slate-50 px-3.5 focus-within:border-[#0066FF] focus-within:bg-white">
              <select
                id="form-exp"
                value={form.experience}
                onChange={set('experience')}
                className="h-11 w-full appearance-none bg-transparent pr-8 text-[13px] text-slate-900 focus:outline-none"
              >
                <option value="">Select qualification level…</option>
                {EXPERIENCE_LEVELS.map((exp) => (
                  <option key={exp} value={exp}>
                    {exp}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-3.5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Callback Time Slot */}
        <div>
          <label htmlFor="form-slot" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Callback Time Window
          </label>
          <div className="relative flex items-center rounded-xl border border-slate-300 bg-slate-50 px-3.5 focus-within:border-[#0066FF] focus-within:bg-white">
            <Clock size={16} className="text-slate-400 shrink-0 mr-2" />
            <select
              id="form-slot"
              value={form.preferred_slot}
              onChange={set('preferred_slot')}
              className="h-11 w-full appearance-none bg-transparent pr-8 text-[13px] text-slate-900 focus:outline-none"
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3.5 text-slate-400" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="form-msg" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Message or Specific Questions
          </label>
          <textarea
            id="form-msg"
            rows={3}
            placeholder="Let us know your preferred batch date, hostel needs, or welder qualification standard (AWS D1.1, ASME IX)..."
            value={form.message}
            onChange={set('message')}
            className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 p-3.5 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#0066FF] focus:bg-white focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={state.status === 'loading'}
            className="btn-orange w-full rounded-xl py-4 text-sm font-extrabold uppercase tracking-wider cursor-pointer shadow-lg shadow-[#0B2545]/20 hover:shadow-xl"
          >
            {state.status === 'loading' ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <Sparkles size={18} /> Transmit Inquiry to Admissions <ArrowRight size={16} />
              </>
            )}
          </button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
            <ShieldCheck size={14} className="text-[#0066FF]" />
            Your contact information is strictly protected and used for NIW admission communication.
          </p>
        </div>

        {state.status === 'error' && (
          <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-600">
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}
