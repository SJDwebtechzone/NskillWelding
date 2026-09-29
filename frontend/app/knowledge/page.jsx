import Hero from '@/components/Hero';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedArticles from '@/components/FeaturedArticles';
import ResourceCenter from '@/components/ResourceCenter';
import VideoGrid from '@/components/VideoGrid';
import FaqSection from '@/components/FaqSection';
import Newsletter from '@/components/Newsletter';
import { getKnowledgePage } from '@/lib/api';

export const revalidate = 60;

export const metadata = {
  title: 'Welding Knowledge Center – Articles, Guides & Videos',
  description: 'Welding articles, downloadable guides, video tutorials and FAQs on TIG, MIG, ARC, 6G pipe welding, weld quality, codes and safety from National Institute of Welding, Chennai.',
  alternates: { canonical: '/knowledge' },
};

export default async function KnowledgePage() {
  const data = await getKnowledgePage();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Breadcrumb items={[['Knowledge Center']]} />
      <CategoryGrid categories={data.categories} />
      <FeaturedArticles articles={data.featured} />

      <div className="container-site grid gap-10 pt-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-0">
        <div className="lg:pr-7"><ResourceCenter resources={data.resources} /></div>
        <div className="lg:border-l lg:border-niw-line lg:pl-7"><VideoGrid videos={data.videos} /></div>
      </div>

      <FaqSection faqs={data.faqs} />
      <Newsletter />
    </>
  );
}
