import HomeHero from '@/components/HomeHero';
import WhoWeAre from '@/components/WhoWeAre';
import CourseGrid from '@/components/CourseGrid';
import CareerRoadmap from '@/components/CareerRoadmap';
import WhyChoose from '@/components/WhyChoose';
import FacilitiesGallery from '@/components/FacilitiesGallery';
import IndustrySectors from '@/components/IndustrySectors';
import CareerOpportunities from '@/components/CareerOpportunities';
import StudentSuccess from '@/components/StudentSuccess';
import HomeFaqEnquire from '@/components/HomeFaqEnquire';
import CtaBand from '@/components/CtaBand';
import EnquiryModal from '@/components/EnquiryModal';
import { getHomePage } from '@/lib/api';
import { homeFallback } from '@/lib/fallback';
import { site } from '@/lib/site';

export const revalidate = 60;

export const metadata = {
  title: { absolute: 'National Institute of Welding | Welding Training Institute in Chennai' },
  description: 'Practical TIG, MIG, ARC, 6G pipe, structural and stainless steel welding training in Chennai, with welder qualification, inspection and placement guidance.',
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  // Merge over the fallback so a missing list never breaks the page
  const d = { ...homeFallback, ...(await getHomePage()) };

  const schema = [
    {
      '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: site.name,
      url: 'https://www.weldingskill.com', telephone: site.phone, email: site.email,
      address: { '@type': 'PostalAddress', streetAddress: 'No.12, SIDCO Industrial Estate, Ambattur', addressLocality: 'Chennai', postalCode: '600098', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: (d.faqs || []).map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HomeHero />
      <WhoWeAre />
      <CourseGrid />
      <CareerRoadmap />
      <WhyChoose />
      <FacilitiesGallery />
      <IndustrySectors />
      <CareerOpportunities />
      <StudentSuccess />
      <HomeFaqEnquire faqs={d.faqs} courseOptions={d.courseOptions} />
      <CtaBand variant="orange" enquireHref="#enquire" />
      <EnquiryModal courseOptions={d.courseOptions} />
    </>
  );
}
