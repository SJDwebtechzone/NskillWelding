import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Navigation,
  Home,
  ChevronRight,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Contact National Institute of Welding | Chennai Campus, Phone & Directions',
  description:
    'Get in touch with National Institute of Welding (NIW), Kovur, Chennai. Admissions helpline +91 81100 00330, WhatsApp support, campus address & Google Map location.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    url: 'https://www.weldingskill.com/contact',
    telephone: site.phone1,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.2/24, Pillaiyar Koil Street, Raghavendra Nagar, Irandamkattalai, Kovur',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600128',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9984,
      longitude: 80.1264,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.phone1,
        contactType: 'admissions',
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: site.phone2,
        contactType: 'customer support',
        areaServed: 'IN',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* =========================================================
         1. HERO BANNER - MODERN METALLIC NAVY & ARC FLARE
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B2545] py-14 text-white lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[#0066FF]/30 blur-3xl pointer-events-none"
        />

        <div className="container-site">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-[#0066FF]/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#38BDF8]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#38BDF8]" />
            </span>
            <span>Admissions &amp; Workshop Helplines Active Now</span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
            Contact &amp; <span className="text-weld-blue">Admissions Center</span>
          </h1>

          <p className="mt-3 max-w-2xl text-base text-slate-200 sm:text-lg leading-relaxed">
            Connect with National Institute of Welding (NIW). Speak directly with our master instructors, reserve practical booth time, or request welder qualification testing (WPS/PQR/WPQT).
          </p>

          <nav aria-label="Breadcrumb" className="mt-8">
            <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <li>
                <Link href="/" className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors">
                  <Home size={13} /> Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={12} className="text-slate-400" />
                <span className="text-white" aria-current="page">
                  Contact Us
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* =========================================================
         2. HIGHLIGHT CARDS GRID (4 PREMIUM METALLIC CARDS)
         ========================================================= */}
      <section className="relative -mt-8 z-10 container-site">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Phone */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl hover:border-[#0066FF] transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF3FE] text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
              <Phone size={22} />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-slate-900">
              Direct Helplines
            </h2>
            <p className="mt-1 text-xs text-slate-500">Admissions &amp; Course Advice</p>
            <div className="mt-3 space-y-1 font-display font-extrabold text-sm text-[#0B2545]">
              <a href={site.phoneHref} className="block hover:text-[#0066FF] transition-colors">
                {site.phone1}
              </a>
              <a href={site.phoneHref2} className="block hover:text-[#0066FF] transition-colors">
                {site.phone2}
              </a>
            </div>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-[#0066FF] hover:underline"
            >
              Call Admissions <ChevronRight size={14} />
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl hover:border-emerald-500 transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <MessageCircle size={22} />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-slate-900">
              WhatsApp Desk
            </h2>
            <p className="mt-1 text-xs text-slate-500">Instant Syllabus &amp; Fee Details</p>
            <div className="mt-3 font-display font-extrabold text-sm text-[#0B2545]">
              {site.phone1}
            </div>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-emerald-600 hover:underline"
            >
              Chat on WhatsApp <ChevronRight size={14} />
            </a>
          </div>

          {/* Card 3: Address */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl hover:border-[#0066FF] transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF3FE] text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
              <MapPin size={22} />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-slate-900">
              Campus Location
            </h2>
            <p className="mt-1 text-xs text-slate-500">Kovur, Chennai Campus</p>
            <address className="mt-3 text-xs not-italic font-semibold text-slate-700 leading-snug">
              No.2/24, Pillaiyar Koil Street, Raghavendra Nagar, Kovur, Chennai - 600128
            </address>
            <a
              href="#campus-map"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-[#0066FF] hover:underline"
            >
              View Location Map <ChevronRight size={14} />
            </a>
          </div>

          {/* Card 4: Email */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl hover:border-[#0066FF] transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF3FE] text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
              <Mail size={22} />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-slate-900">
              Email Desk
            </h2>
            <p className="mt-1 text-xs text-slate-500">Corporate &amp; Certification Desk</p>
            <div className="mt-3 font-display font-extrabold text-xs text-[#0B2545] truncate">
              {site.email}
            </div>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-[#0066FF] hover:underline"
            >
              Send Official Email <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
         3. MAIN 2-COLUMN SECTION: FORM + EXPANDED MAP
         ========================================================= */}
      <section className="py-16 bg-slate-50 text-slate-900">
        <div className="container-site grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Column: Modern Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right Column: Expanded High-Definition Map Frame */}
          <div id="campus-map" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl h-full flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-[#0B2545]">
                  Campus Location Map
                </h3>
                <p className="text-xs text-slate-500">No.2/24, Pillaiyar Koil Street, Kovur, Chennai - 600128</p>
              </div>
              <a
                href="https://maps.google.com/?q=No.2/24,+Pillaiyar+Koil+Street,+Raghavendra+Nagar,+Irandamkattalai,+Kovur,+Chennai+-+600128"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0066FF] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[#0B2545] transition-colors shrink-0"
              >
                Get Directions <Navigation size={14} />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 flex-1 min-h-[480px]">
              <iframe
                title="National Institute of Welding Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.996162381273!2d80.1242133!3d12.998411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260195b05f241%3A0x7d890b0d39360879!2sKovur%2C%20Chennai%2C%20Tamil%20Nadu%20600128!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '480px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
