'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const btn = 'grid h-9 w-9 shrink-0 place-items-center rounded-full border border-niw-line bg-white text-niw-ink shadow-card hover:border-niw-orange hover:text-niw-orange';

function Row({ rowRef, children, label, itemClass }) {
  return (
    <ul ref={rowRef} aria-label={label}
        className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {[].concat(children).map((child, i) => <li key={i} className={`shrink-0 snap-start ${itemClass}`}>{child}</li>)}
    </ul>
  );
}

function useScroller() {
  const ref = useRef(null);
  const move = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' });
  return [ref, move];
}

/** Arrows on both sides of the row */
export default function ScrollRow({ children, label, itemClass = 'w-[78%] sm:w-[45%] lg:w-[23%]' }) {
  const [ref, move] = useScroller();
  return (
    <div className="flex items-center gap-3">
      <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`} className={btn}><ChevronLeft size={18} /></button>
      <Row rowRef={ref} label={label} itemClass={itemClass}>{children}</Row>
      <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`} className={btn}><ChevronRight size={18} /></button>
    </div>
  );
}

/** Title on the left, arrows top-right, row below */
export function ScrollRowWithTopButtons({ title, children, label, itemClass = 'w-[70%] sm:w-[40%] lg:w-[19%]' }) {
  const [ref, move] = useScroller();
  return (
    <>
      <div className="flex items-end justify-between gap-4">
        {title}
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`} className={btn}><ChevronLeft size={18} /></button>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`} className={btn}><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="mt-4"><Row rowRef={ref} label={label} itemClass={itemClass}>{children}</Row></div>
    </>
  );
}
