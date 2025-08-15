import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import axios from 'axios';
import { Advantages, ProductList, SeoText, VacancyStats } from '@/components';
import { firstLevelCategories } from '@/helpers';
import { getMenu, getPageData, getProducts } from '@/services';

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

  let pageData, products;

  try {
    pageData = await getPageData(alias);
    products = await getProducts(pageData.category, 10);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error(e.message);
    }
    notFound();
  }

  return (
    <>
      <ProductList
        title={pageData.title}
        items={products}
        tags={pageData.tags}
      />
      <VacancyStats ln={pageData.ln} category={pageData.category} />
      <Advantages list={pageData.advantages} />
      <SeoText text={pageData.seoText} />
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
