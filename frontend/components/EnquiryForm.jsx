'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Loader2, CheckCircle2, Lock, User, MessageCircle, Mail, ChevronDown } from 'lucide-react';

const EXTRA_OPTIONS = ['Welder Qualification', 'Welding Inspection', 'Corporate Training'];
const EXPERIENCE = ['Fresher', 'ITI', 'Diploma', 'Experienced Welder', 'Company / Corporate'];

function Field({ icon: Icon, error, children }) {
  return (
    <div>
      <div className={`flex items-center border bg-white ${error ? 'border-red-500' : 'border-niw-line'}`}>
        {Icon && <Icon size={16} className="ml-3 shrink-0 text-niw-slate" aria-hidden="true" />}
        {children}
      </div>
      {error && <p className="mt-1 text-[11px] text-red-400">{error}</p>}
    </div>
  );
}

function SelectField({ id, label, captioned, value, onChange, options }) {
  // captioned: small label above the value (course page sidebar); otherwise the label is the placeholder option
  return (
    <div className="relative flex items-center border border-niw-line bg-white">
      {captioned ? (
        <label htmlFor={id} className="flex w-full flex-col px-3 pt-1.5">
          <span className="text-[10px] leading-none text-niw-slate">{label}</span>
          <select id={id} value={value} onChange={onChange}
                  className="h-7 w-full appearance-none bg-transparent pr-6 text-[13px] text-niw-ink focus:outline-none">
            <option value="">Choose…</option>
            {options.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
      ) : (
        <>
          <label className="sr-only" htmlFor={id}>{label}</label>
          <select id={id} value={value} onChange={onChange}
                  className="h-11 w-full min-w-0 appearance-none bg-transparent px-3 pr-8 text-[13px] text-niw-ink focus:outline-none">
            <option value="">{label}</option>
            {options.map((o) => <option key={o}>{o}</option>)}
          </select>
        </>
      )}
      <ChevronDown size={16} className="pointer-events-none absolute right-3 text-niw-slate" aria-hidden="true" />
    </div>
  );
}

const input = 'h-11 w-full min-w-0 bg-transparent px-3 text-[13px] text-niw-ink placeholder:text-niw-slate focus:outline-none';

/** layout: 'grid' (homepage, 2 columns) | 'stack' (course page sidebar) */
export default function EnquiryForm({ courseOptions = [], defaultCourse = '', layout = 'grid', submitLabel = 'Submit Enquiry' }) {
  const pathname = usePathname();
  const empty = { full_name: '', whatsapp: '', email: '', interest: defaultCourse, experience: '', message: '' };
  const [form, setForm] = useState(empty);
  const [state, setState] = useState({ status: 'idle', message: '', fields: {} });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ status: 'loading', message: '', fields: {} });
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source_page: pathname }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setState({ status: 'error', message: data.error || 'Enquiry not sent. Call or WhatsApp us instead.', fields: data.fields || {} }); return; }
      setState({ status: 'success', message: data.message, fields: {} });
      setForm(empty);
    } catch {
      setState({ status: 'error', message: 'Enquiry not sent. Check your connection, or call or WhatsApp us.', fields: {} });
    }
  }

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-start gap-3 py-6 text-white" role="status">
        <CheckCircle2 size={36} className="text-green-400" />
        <p className="text-sm">{state.message}</p>
        <button type="button" onClick={() => setState({ status: 'idle', message: '', fields: {} })} className="text-xs font-semibold text-niw-orange underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  const f = state.fields;
  const options = [...courseOptions, ...EXTRA_OPTIONS];
  const grid = layout === 'grid';

  return (
    <form onSubmit={onSubmit} noValidate className={grid ? 'grid gap-3 sm:grid-cols-2' : 'space-y-2.5'}>
      <Field icon={grid ? null : User} error={f.full_name}>
        <label className="sr-only" htmlFor="enq-name">Full name</label>
        <input id="enq-name" className={input} placeholder="Full Name *" autoComplete="name" value={form.full_name} onChange={set('full_name')} required />
      </Field>
      <Field icon={grid ? null : MessageCircle} error={f.whatsapp}>
        <label className="sr-only" htmlFor="enq-wa">WhatsApp number</label>
        <input id="enq-wa" className={input} placeholder="WhatsApp Number *" inputMode="tel" autoComplete="tel" value={form.whatsapp} onChange={set('whatsapp')} required />
      </Field>
      <Field icon={grid ? null : Mail} error={f.email}>
        <label className="sr-only" htmlFor="enq-email">Email address</label>
        <input id="enq-email" type="email" className={input} placeholder="Email Address" autoComplete="email" value={form.email} onChange={set('email')} />
      </Field>
      <SelectField id="enq-interest" label={grid ? 'I am interested in' : 'Select course'} captioned={!grid}
                   value={form.interest} onChange={set('interest')} options={options} />
      <SelectField id="enq-exp" label="Your experience" captioned={!grid}
                   value={form.experience} onChange={set('experience')} options={EXPERIENCE} />
      <div className={grid ? 'sm:row-span-2' : ''}>
        <label className="sr-only" htmlFor="enq-msg">Message</label>
        <textarea id="enq-msg" rows={grid ? 3 : 2} placeholder="Message (optional)" value={form.message} onChange={set('message')}
                  className="h-full w-full resize-none border border-niw-line bg-white px-3 py-2.5 text-[13px] text-niw-ink placeholder:text-niw-slate focus:outline-none" />
      </div>
      <div className={grid ? 'sm:col-start-1' : ''}>
        <button type="submit" disabled={state.status === 'loading'} className={`btn-orange disabled:opacity-70 ${grid ? '' : 'w-full'}`}>
          {state.status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <>{submitLabel} <ArrowRight size={16} /></>}
        </button>
        {!grid && <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/70"><Lock size={11} /> Your information is safe with us.</p>}
      </div>
      {state.status === 'error' && <p role="alert" className={`text-xs text-red-300 ${grid ? 'sm:col-span-2' : ''}`}>{state.message}</p>}
    </form>
  );
}
