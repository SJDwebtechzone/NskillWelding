// Small brand marks (lucide no longer ships brand icons)
const base = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true };
export const Facebook = (p) => (<svg {...base} {...p}><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.7v8h3.3z"/></svg>);
export const Instagram = (p) => (<svg {...base} {...p}><path d="M12 7.3a4.7 4.7 0 100 9.4 4.7 4.7 0 000-9.4zm0 7.7a3 3 0 110-6 3 3 0 010 6zm6-7.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM21.9 8c-.1-1.5-.4-2.8-1.5-3.9S18 2.7 16.5 2.6C15 2.5 9 2.5 7.5 2.6 6 2.7 4.7 3 3.6 4.1S2.2 6.5 2.1 8C2 9.5 2 15.5 2.1 17c.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 7.5.1 9 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-7.5 0-9zm-2 10.7a3 3 0 01-1.7 1.7c-1.2.5-4 .4-5.2.4s-4.1.1-5.2-.4a3 3 0 01-1.7-1.7c-.5-1.2-.4-4-.4-5.2s-.1-4.1.4-5.2A3 3 0 017.8 4.6c1.2-.5 4-.4 5.2-.4s4.1-.1 5.2.4a3 3 0 011.7 1.7c.5 1.2.4 4 .4 5.2s.1 4.1-.4 5.2z"/></svg>);
export const Youtube = (p) => (<svg {...base} {...p}><path d="M23 7.2a3 3 0 00-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 001 7.2 31 31 0 00.5 12 31 31 0 001 16.8a3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8zM9.7 15V9l5.9 3-5.9 3z"/></svg>);
export const Linkedin = (p) => (<svg {...base} {...p}><path d="M6.9 21H3.2V8.9h3.7V21zM5 7.3a2.2 2.2 0 110-4.3 2.2 2.2 0 010 4.3zM21 21h-3.7v-5.9c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1v6H9.4V8.9h3.5v1.7h.1c.5-.9 1.7-2 3.5-2 3.7 0 4.4 2.5 4.4 5.6V21z"/></svg>);

export function SocialLinks({ social, size = 'sm' }) {
  const items = [
    ['Facebook', social.facebook, Facebook, 'bg-[#1877F2]'],
    ['Instagram', social.instagram, Instagram, 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]'],
    ['YouTube', social.youtube, Youtube, 'bg-[#FF0000]'],
    ['LinkedIn', social.linkedin, Linkedin, 'bg-[#0A66C2]'],
  ];
  const box = size === 'sm' ? 'h-5 w-5' : 'h-7 w-7';
  return (
    <ul className="flex items-center gap-2">
      {items.map(([label, href, Icon, bg]) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
             className={`${box} ${bg} grid place-items-center rounded-[3px] text-white transition-opacity hover:opacity-85`}>
            <Icon width={size === 'sm' ? 12 : 15} height={size === 'sm' ? 12 : 15} />
          </a>
        </li>
      ))}
    </ul>
  );
}
