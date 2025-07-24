import parse from 'html-react-parser';
import { Metadata } from 'next';
import { Advantages, Section, Tag, VacancyStats } from '@/components';
import {
  firstLevelCategories,
  getMenu,
  getPageData,
  getProducts,
} from '@/helpers';
import { Products } from './components/Products/Products';

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
    title: pageData.metaTitle,
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
      <Products title={title} items={products} />
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
      <Section title="Skills acquired">
        <div className={styles.skills}>
          {tags.map((t) => (
            <Tag key={t} color="primary">
              {t}
            </Tag>
          ))}
        </div>
      </Section>
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
