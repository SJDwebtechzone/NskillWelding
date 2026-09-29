import { notFound } from 'next/navigation';
import { CourseHero, Overview, LearnAndVideo, Modules, WhyTake, DetailsCareersIndustries, WhatsAppQuick, accentTitle } from '@/components/CourseSections';
import EnquiryForm from '@/components/EnquiryForm';
import Accordion from '@/components/Accordion';
import CourseCard from '@/components/CourseCard';
import ArcImage from '@/components/ArcImage';
import CtaBand from '@/components/CtaBand';
import { ScrollRowWithTopButtons } from '@/components/ScrollRow';
import { getCourse } from '@/lib/api';
import { site } from '@/lib/site';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const c = await getCourse(params.slug);
  if (!c) return { title: 'Course not found' };
  const { main } = accentTitle(c.title);
  return {
    title: /training/i.test(main) ? `${main} Course in Chennai` : `${main} Training in Chennai`,
    description: `${c.short_desc} ${c.duration ? `Duration: ${c.duration}. ` : ''}Practical training, certification support and placement guidance at NIW Chennai.`,
    alternates: { canonical: `/courses/${c.slug}` },
  };
}

export default async function CoursePage({ params }) {
  const c = await getCourse(params.slug);
  if (!c) notFound();
  const { main, suffix } = accentTitle(c.title);

  const schema = [
    { '@context': 'https://schema.org', '@type': 'Course', name: `${main} ${suffix}`.trim(), description: c.overview || c.short_desc,
      provider: { '@type': 'EducationalOrganization', name: site.name, sameAs: 'https://www.weldingskill.com' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: (c.faqs || []).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CourseHero course={c} />

      <div className="container-site grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-9">
          <Overview course={c} />
          <LearnAndVideo course={c} />
          {c.modules?.length > 0 && <Modules modules={c.modules} />}
        </div>
        <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">
          <div id="enquire" className="scroll-mt-24 bg-niw-ink p-5 text-white">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">Interested in this course?</h2>
            <p className="mb-4 mt-1 text-[11px] text-white/75">Get course details, fees and next batch date.</p>
            <EnquiryForm layout="stack" courseOptions={c.courseOptions} defaultCourse={c.title} submitLabel="Get course details" />
          </div>
          <WhatsAppQuick />
        </aside>
      </div>

      <div className="container-site space-y-10 pb-12">
        <WhyTake />

        {c.gallery?.length > 0 && (
          <section aria-labelledby="gal-heading">
            <ScrollRowWithTopButtons label="gallery photos"
              title={<h2 id="gal-heading" className="font-display text-2xl font-bold uppercase tracking-wide">Training <span className="text-niw-orange">Gallery</span></h2>}>
              {c.gallery.map((g, i) => (
                <ArcImage key={g.title} src={g.image_url} alt={g.title} variant={i} className="aspect-[4/3]">
                  <span className="absolute inset-x-0 bottom-0 bg-black/70 px-2 py-1.5 text-center text-[12px] text-white">{g.title}</span>
                </ArcImage>
              ))}
            </ScrollRowWithTopButtons>
          </section>
        )}

        <DetailsCareersIndustries course={c} />

        <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide">Frequently asked <span className="text-niw-orange">questions</span></h2>
            <div className="mt-3">
              <Accordion columns={2} numbered items={(c.faqs || []).map((f, i) => ({ id: i, question: f.q, answer: f.a }))} />
            </div>
          </div>
          <div className="lg:border-l lg:border-niw-line lg:pl-8">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide">Related <span className="text-niw-orange">courses</span></h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-3">
              {c.related.map((r, i) => <li key={r.slug}><CourseCard course={r} index={i + 1} size="sm" /></li>)}
            </ul>
          </div>
        </section>
      </div>

      <CtaBand variant="dark" title="Ready to build your welding career?" text="Join professional welding training at NIW." />
    </>
  );
}
