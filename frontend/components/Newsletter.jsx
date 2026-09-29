'use client';
import { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState({ status: 'idle', message: '' });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ status: 'loading', message: '' });
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Subscription failed. Check the API server and try again.');
      setState({ status: 'success', message: data.message });
      setEmail('');
    } catch (err) {
      setState({ status: 'error', message: err.message.includes('fetch') ? 'Subscription failed. Check the API server and try again.' : err.message });
    }
  }

  return (
    <section aria-labelledby="nl-heading" className="container-site pb-10 pt-10">
      <div className="flex flex-col gap-6 rounded-md bg-niw-ink px-6 py-6 text-white md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-niw-orange"><Mail size={26} /></span>
          <div>
            <h2 id="nl-heading" className="font-display text-2xl font-bold uppercase tracking-wide">Stay updated with latest knowledge</h2>
            <p className="mt-1 text-xs text-white/80">Subscribe to our newsletter and get the latest articles, tips and industry updates.</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="w-full md:max-w-[440px]" noValidate>
          <div className="flex h-12">
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input id="nl-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                   placeholder="Enter your email address" autoComplete="email"
                   className="min-w-0 flex-1 bg-white px-4 text-sm text-niw-ink placeholder:text-niw-slate focus:outline-none" />
            <button type="submit" disabled={state.status === 'loading'} className="btn-orange min-w-[120px] disabled:opacity-70">
              {state.status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : 'Subscribe'}
            </button>
          </div>
          <p aria-live="polite" className={`mt-2 min-h-[1rem] text-xs ${state.status === 'error' ? 'text-red-300' : 'text-green-300'}`}>
            {state.message}
          </p>
        </form>
      </div>
    </section>
  );
}
