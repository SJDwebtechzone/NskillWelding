import { Hand, Wrench, Users, Award } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CourseGrid from '@/components/CourseGrid';
import WhyChooseDetailed from '@/components/WhyChooseDetailed';
import TrainingProcess from '@/components/TrainingProcess';
import FacilitiesGallery from '@/components/FacilitiesGallery';
import CtaBand from '@/components/CtaBand';
import { getTrainingPage } from '@/lib/api';

export const revalidate = 60;

export const metadata = {
  title: 'Welding Training Courses in Chennai – TIG, MIG, ARC, 6G',
  description: 'Hands-on welding courses in Chennai: ARC, TIG, MIG/MAG, 6G pipe, structural, stainless steel and fitter training with certification and career support.',
  alternates: { canonical: '/courses' },
};

export default async function TrainingPage() {
  const { courses, stats, facilities } = await getTrainingPage();
  return (
    <>
      <PageHero
        title="Welding Training"
        subtitle="Build skills. Build future."
        text="Industry focused, hands-on welding training programs designed to make you job-ready and future-ready."
        points={[[Hand, '100% Practical Training'], [Wrench, 'Industry Standard Equipment'], [Users, 'Expert & Certified Trainers'], [Award, 'Certification & Career Support']]}
        crumbs={[['Welding Training']]}
      />
      <CourseGrid
        courses={courses}
        heading={{ lead: 'Our', accent: 'Welding', tail: 'Courses' }}
        intro="Choose the right welding course to match your career goals."
        showDuration
        cta="View details"
        limit={6}
      />
      <WhyChooseDetailed stats={stats} />
      <TrainingProcess />
      <FacilitiesGallery facilities={facilities} tone="white" />
      <CtaBand variant="dark" enquireHref="/#enquire" text="Join thousands of successful students and build a rewarding career in welding." />
    </>
  );
}
