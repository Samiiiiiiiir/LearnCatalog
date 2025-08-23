import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Banner, NewCourses } from '@/widgets';
import { firstLevelCategories } from '@/helpers';

interface TypeProps {
  params: Promise<{ type: string }>;
}

export const metadata: Metadata = {
  title: 'Online course catalog | LearnCatalog',
};

export default async function TypePage({ params }: TypeProps) {
  const { type } = await params;

  const category = firstLevelCategories.find((c) => c.route == type);

  if (!category || category.route === 'books') {
    notFound();
  }

  return (
    <>
      <Banner
        bgImage="https://www.american.edu/spa/data-science/images/Data-Science-Institute_banner.jpg"
        linkText="Try it now"
        linkHref={`/${type}/data-science`}
        text="Build powerful, data-driven solutions - practical, up-to-date tutorials to advance your Data Science career."
        heading="Master tomorrow's skills today"
      />
      <NewCourses />
    </>
  );
}

export async function generateStaticParams() {
  const paths = firstLevelCategories.map((c) => ({
    type: c.route,
  }));

  return paths;
}
