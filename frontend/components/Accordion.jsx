'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

/** items: [{ id, question, answer }]; columns: 1 | 2; numbered: prefix "1." etc. */
export default function Accordion({ items, columns = 1, numbered = false }) {
  const [open, setOpen] = useState(null);
  const cols = columns === 2 ? [items.slice(0, Math.ceil(items.length / 2)), items.slice(Math.ceil(items.length / 2))] : [items];
  let n = 0;
  return (
    <div className={`grid items-start gap-2 ${columns === 2 ? 'md:grid-cols-2 md:gap-4' : ''}`}>
      {cols.map((col, c) => (
        <ul key={c} className="space-y-2">
          {col.map((item) => {
            n += 1;
            const id = `acc-${item.id ?? n}`;
            const isOpen = open === id;
            return (
              <li key={id} className="border border-niw-line bg-white">
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`${id}-panel`} onClick={() => setOpen(isOpen ? null : id)}
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-medium text-niw-ink hover:text-niw-orange">
                    <span>{numbered && `${n}. `}{item.question}</span>
                    {isOpen ? <Minus size={16} className="shrink-0 text-niw-orange" /> : <Plus size={16} className="shrink-0" />}
                  </button>
                </h3>
                <div id={`${id}-panel`} hidden={!isOpen} className="border-t border-niw-line px-4 py-3 text-[13px] leading-relaxed text-niw-slate">
                  {item.answer}
                </div>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
