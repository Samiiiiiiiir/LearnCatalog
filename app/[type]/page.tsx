import { notFound } from 'next/navigation';
import { Heading } from '@/components';
import { firstLevelCategories } from '@/helpers';
// import { Metadata } from 'next';

interface TypeProps {
  params: Promise<{ type: string }>;
}

/* export const metadata: Metadata = {
  title: 'page',
}; */

export default async function Type({ params }: TypeProps) {
  const { type } = await params;

  const category = firstLevelCategories.find((c) => c.route == type);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Heading type="h1">{type} page</Heading>
    </>
  );
}

export async function generateStaticParams() {
  const paths = firstLevelCategories.map((c) => ({
    type: c.route,
  }));

  return paths;
}
