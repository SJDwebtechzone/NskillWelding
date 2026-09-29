import ScrollRow from './ScrollRow';

// Company names render as text unless a logo_url is set (use logos only with permission)
export default function Recruiters({ recruiters }) {
  if (!recruiters?.length) return null;
  return (
    <section aria-labelledby="rec-heading" className="bg-white pb-10">
      <div className="container-site">
        <h2 id="rec-heading" className="flex items-center justify-center gap-3 font-display text-xl font-bold uppercase tracking-wide">
          Our students work with <span aria-hidden="true" className="h-0.5 w-10 bg-niw-orange" />
        </h2>
        <div className="mt-5">
          <ScrollRow label="employers" itemClass="w-[45%] sm:w-[23%] lg:w-[calc(12.5%-14px)]">
            {recruiters.map((r) => (
              <div key={r.id} className="grid h-16 place-items-center border border-niw-line bg-white px-3 text-center">
                {r.logo_url
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={r.logo_url} alt={r.name} className="max-h-10 max-w-full object-contain" loading="lazy" />
                  : <span className="font-display text-[15px] font-bold uppercase leading-tight tracking-wide text-niw-steel">{r.name}</span>}
              </div>
            ))}
          </ScrollRow>
        </div>
      </div>
    </section>
  );
}
