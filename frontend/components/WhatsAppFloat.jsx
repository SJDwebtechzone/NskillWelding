import { site } from '@/lib/site';

// Vertical "WhatsApp Us" tab on the right edge (desktop; phones use the bottom bar)
export default function WhatsAppFloat() {
  return (
    <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer"
       className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-l-md bg-niw-orange px-2 py-4 text-white shadow-lg hover:bg-niw-orange-dark lg:flex">
      <span className="text-xs font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180">WhatsApp Us</span>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 000-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.3c0-.1-.2-.2-.5-.3z"/>
      </svg>
    </a>
  );
}
