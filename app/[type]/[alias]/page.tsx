import parse from 'html-react-parser';
import { Metadata } from 'next';
import { Advantages, ProductList, Section, VacancyStats } from '@/components';
import {
  firstLevelCategories,
  getMenu,
  getPageData,
  getProducts,
} from '@/helpers';

import styles from './page.module.scss';

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

export default async function Catalog({ params }: CatalogProps) {
  const { alias } = await params;

  const pageData = await getPageData(alias);
  const { title, category, ln, advantages, seoText, tags } = pageData;

  const products = await getProducts(category, 10);

  return (
    <div>
      <ProductList title={title} items={products} tags={tags} />
      <Section title={`Jobs - ${category}`}>
        {ln && (
          <VacancyStats
            count={ln.count}
            juniorSalary={ln.juniorSalary}
            middleSalary={ln.middleSalary}
            seniorSalary={ln.seniorSalary}
          />
        )}
      </Section>
      {advantages && advantages.length > 0 && (
        <Section title="Advantages">
          <Advantages list={advantages} />
          {seoText && <div className={styles.seoText}>{parse(seoText)}</div>}
        </Section>
      )}
    </div>
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
