import { Metadata } from 'next';
import { Advantages, ProductList, SeoText, VacancyStats } from '@/components';
import {
  firstLevelCategories,
  getMenu,
  getPageData,
  getProducts,
} from '@/helpers';

interface CatalogProps {
  params: Promise<{ alias: string; type: string }>;
}

export async function generateMetadata({
  params,
}: CatalogProps): Promise<Metadata> {
  const { alias } = await params;

  const pageData = await getPageData(alias);

  return {
    title: `${pageData.metaTitle} | LearnCatalog`,
    description: pageData.metaDescription,
  };
}

export default async function CatalogPage({ params }: CatalogProps) {
  const { alias } = await params;

  const pageData = await getPageData(alias);
  const { title, category, ln, advantages, seoText, tags } = pageData;

  const products = await getProducts(category, 10);

  return (
    <>
      <ProductList title={title} items={products} tags={tags} />
      <VacancyStats ln={ln} category={category} />
      <Advantages list={advantages} />
      <SeoText text={seoText} />
    </>
  );
}

export async function generateStaticParams() {
  let paths: { type: string; alias: string }[] = [];

  for (const category of firstLevelCategories) {
    const menu = await getMenu(category.id);

    paths = paths.concat(
      menu.flatMap((m) =>
        m.pages.map((p) => ({
          type: category.route,
          alias: p.alias,
        })),
      ),
    );
  }

  return paths;
}
