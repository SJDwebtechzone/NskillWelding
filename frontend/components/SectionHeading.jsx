import { Cog } from 'lucide-react';

export function Divider({ className = '' }) {
  return (
    <span className={`flex items-center gap-2 text-niw-orange ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-niw-orange" />
      <Cog size={14} strokeWidth={2.2} />
      <span className="h-px w-10 bg-niw-orange" />
    </span>
  );
}

export default function SectionHeading({ lead, accent = '', tail = '' }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="section-title">
        {lead}
        {accent && <> <span className="text-niw-orange">{accent}</span></>}
        {tail && ` ${tail}`}
      </h2>
      <Divider className="mt-2" />
    </div>
  );
}
