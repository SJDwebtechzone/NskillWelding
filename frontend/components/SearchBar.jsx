'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, FileText, PlayCircle, Download, Loader2 } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const [q, setQ] = useState('');
  const [results, setResults] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | error
  const boxRef = useRef(null);

  useEffect(() => {
    const term = q.trim();
    if (term.length < 2) { setResults(null); setStatus('idle'); return; }
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      setStatus('loading');
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(term)}`, { signal: ctrl.signal });
        if (!res.ok) throw new Error();
        setResults(await res.json());
        setStatus('idle');
      } catch (e) {
        if (e.name !== 'AbortError') setStatus('error');
      }
    }, 250);
    return () => { clearTimeout(t); ctrl.abort(); };
  }, [q]);

  useEffect(() => {
    const close = (e) => { if (boxRef.current && !boxRef.current.contains(e.target)) setResults(null); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (q.trim()) router.push(`/knowledge/articles?search=${encodeURIComponent(q.trim())}`);
  };

  const total = results ? results.articles.length + results.videos.length + results.resources.length : 0;
  const showPanel = q.trim().length >= 2 && (results || status !== 'idle');

  return (
    <div ref={boxRef} className="relative w-full max-w-[520px]">
      <form onSubmit={submit} role="search" className="flex h-12 bg-white">
        <label htmlFor="kc-search" className="sr-only">Search articles, guides and videos</label>
        <input id="kc-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off"
               placeholder="Search articles, guides, videos..."
               className="min-w-0 flex-1 px-4 text-sm text-niw-ink placeholder:text-niw-slate focus:outline-none" />
        <button type="submit" aria-label="Search" className="grid w-14 place-items-center bg-niw-orange text-white hover:bg-niw-orange-dark">
          {status === 'loading' ? <Loader2 size={19} className="animate-spin" /> : <Search size={19} />}
        </button>
      </form>

      {showPanel && (
        <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-96 overflow-y-auto bg-white text-niw-ink shadow-2xl">
          {status === 'error' && <p className="p-4 text-sm">Search is unavailable. Check that the API server is running on port 5000.</p>}
          {results && total === 0 && status !== 'error' && (
            <p className="p-4 text-sm">No results for &ldquo;{q}&rdquo;. Try a process name like TIG, 6G or WPS.</p>
          )}
          {results && total > 0 && (
            <ul className="divide-y divide-niw-line text-sm">
              {results.articles.map((a) => (
                <li key={`a${a.slug}`}><Link href={`/knowledge/${a.slug}`} className="flex items-start gap-3 px-4 py-3 hover:bg-niw-mist">
                  <FileText size={16} className="mt-0.5 shrink-0 text-niw-orange" /><span>{a.title}<span className="block text-xs text-niw-slate">{a.category_name}</span></span></Link></li>
              ))}
              {results.videos.map((v) => (
                <li key={`v${v.id}`}><a href={v.youtube_id ? `https://www.youtube.com/watch?v=${v.youtube_id}` : '#videos'} className="flex items-start gap-3 px-4 py-3 hover:bg-niw-mist">
                  <PlayCircle size={16} className="mt-0.5 shrink-0 text-niw-orange" /><span>{v.title}<span className="block text-xs text-niw-slate">Video, {v.duration}</span></span></a></li>
              ))}
              {results.resources.map((r) => (
                <li key={`r${r.id}`}><a href={`/api/resources/${r.id}/download`} className="flex items-start gap-3 px-4 py-3 hover:bg-niw-mist">
                  <Download size={16} className="mt-0.5 shrink-0 text-niw-orange" /><span>{r.title}<span className="block text-xs text-niw-slate">{r.file_type} download</span></span></a></li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
