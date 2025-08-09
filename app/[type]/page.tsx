import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Banner } from '@/components';
import { firstLevelCategories } from '@/helpers';
import { BannerImg } from '@/assets';

interface TypeProps {
  params: Promise<{ type: string }>;
}

export const metadata: Metadata = {
  title: 'Online course catalog | LearnCatalog',
};

export default async function Type({ params }: TypeProps) {
  const { type } = await params;

  const category = firstLevelCategories.find((c) => c.route == type);

  if (!category || category.route === 'books') {
    notFound();
  }

  return (
    <>
      <Banner
        bgImage={BannerImg.src}
        linkText="Try it now"
        linkHref={`/${type}/nextjs`}
        text="Build powerful, data-driven solutions - practical, up-to-date tutorials to advance your Data Science career."
        heading="Master tomorrow's skills today"
      />
    </>
  );
}

export async function generateStaticParams() {
  const paths = firstLevelCategories.map((c) => ({
    type: c.route,
  }));

  return paths;
}
