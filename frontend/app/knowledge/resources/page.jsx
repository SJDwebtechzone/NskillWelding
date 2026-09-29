import Breadcrumb from '@/components/Breadcrumb';
import ResourceCenter from '@/components/ResourceCenter';
import { getKnowledgePage } from '@/lib/api';

export const metadata = { title: 'Welding Resources & Downloads' };

export default async function ResourcesPage() {
  const { resources } = await getKnowledgePage();
  return (
    <>
      <Breadcrumb items={[['Knowledge Center', '/knowledge'], ['Resources']]} />
      <div className="container-site max-w-2xl pb-16"><ResourceCenter resources={resources} /></div>
    </>
  );
}
