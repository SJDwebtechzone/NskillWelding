import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

const fileStyle = {
  PDF: 'bg-[#E5322D]',
  DOC: 'bg-[#2B6CD4]',
  XLS: 'bg-[#1F8A4C]',
};

function FileBadge({ type }) {
  return (
    <span className={`relative grid h-10 w-8 place-items-center text-[9px] font-bold text-white ${fileStyle[type] || 'bg-niw-slate'}`}
          style={{ clipPath: 'polygon(0 0, 72% 0, 100% 22%, 100% 100%, 0 100%)' }}>
      {type}
    </span>
  );
}

export default function ResourceCenter({ resources }) {
  return (
    <section aria-labelledby="res-heading">
      <div className="flex items-end justify-between">
        <h2 id="res-heading" className="section-title">Resource Center</h2>
        <Link href="/knowledge/resources" className="link-arrow">View all <ArrowRight size={14} /></Link>
      </div>
      <ul className="mt-4 divide-y divide-niw-line border border-niw-line bg-white shadow-card">
        {resources.map((r) => (
          <li key={r.id} className="flex items-center">
            <span className="grid w-16 shrink-0 place-items-center self-stretch border-r border-niw-line py-3"><FileBadge type={r.file_type} /></span>
            <span className="flex-1 px-4 py-3">
              <span className="block text-[13px] font-semibold">{r.title}</span>
              <span className="block text-[11px] text-niw-slate">{r.file_type === 'XLS' ? 'XLS' : r.file_type} Document, {r.size_label}</span>
            </span>
            <a href={`/api/resources/${r.id}/download`} aria-label={`Download ${r.title}`}
               className="mr-3 grid h-10 w-10 place-items-center text-niw-orange hover:bg-niw-mist">
              <Download size={18} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
