// Shows the real photo when image_url is set; otherwise a welding-arc styled placeholder
// so the layout is complete before the institute's own photographs are uploaded.
const glows = [
  'radial-gradient(circle at 62% 58%, rgba(170,210,255,.95) 0 3%, rgba(70,140,255,.55) 9%, rgba(20,50,120,.35) 26%, transparent 46%)',
  'radial-gradient(circle at 40% 62%, rgba(255,210,150,.9) 0 3%, rgba(242,98,31,.45) 10%, rgba(90,40,20,.35) 28%, transparent 48%)',
  'radial-gradient(circle at 55% 45%, rgba(190,220,255,.95) 0 3%, rgba(60,120,255,.5) 10%, rgba(15,40,110,.35) 28%, transparent 48%)',
  'radial-gradient(circle at 50% 100%, rgba(255,160,70,.6) 0, rgba(242,98,31,.25) 30%, transparent 60%)',
];

export default function ArcImage({ src, alt = '', variant = 0, className = '', children }) {
  return (
    <div className={`relative overflow-hidden bg-niw-coal ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div aria-hidden="true" className="absolute inset-0"
             style={{ backgroundImage: `${glows[variant % glows.length]}, linear-gradient(160deg, #1d2530 0%, #0e1116 70%)` }}>
          {/* pipe silhouette */}
          <div className="absolute -left-6 bottom-3 h-12 w-[115%] -rotate-6 rounded-full bg-gradient-to-b from-[#3a414b] via-[#20262e] to-[#12161b] opacity-80" />
        </div>
      )}
      {children}
    </div>
  );
}
