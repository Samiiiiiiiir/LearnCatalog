import { Advantages, Heading, Section, Tag, VacancyStats } from '@/components';
import { API } from '@/helpers/api';
import { firstLevelCategories } from '@/helpers/firstLevelCategories';
import { IMenuItem } from '@/types/MenuItem';
import { IProductItem } from '@/types/ProductItem';
import { ITopPage } from '@/types/TopPage';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';
import clsx from 'clsx';
import parse from 'html-react-parser';

import { Products } from './components/Products/Products';

interface CatalogProps {
  params: Promise<{ alias: string; type: string }>;
}

export default async function Catalog({ params }: CatalogProps) {
  const { type, alias } = await params;

  const pageData: ITopPage = await fetch(`${API.topPage.byAlias}${alias}`).then(
    (res) => res.json(),
  );

  const products: IProductItem[] = await fetch(API.product.find, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      category: pageData.category,
      limit: 10,
    }),
  }).then((res) => res.json());

  console.log(pageData, products);

  if (!pageData || !products) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Products title={pageData.title} items={products} />
      {type == 'courses' && (
        <>
          <Section>
            <div className={clsx(styles.linkedinTitle, styles.pageTitle)}>
              <Heading type="h2">Jobs - {pageData.category}</Heading>
              <Tag color="blue">LinkedIn</Tag>
            </div>
            {pageData.hh && (
              <VacancyStats
                count={pageData.hh.count}
                juniorSalary={pageData.hh.juniorSalary}
                middleSalary={pageData.hh.middleSalary}
                seniorSalary={pageData.hh.seniorSalary}
              />
            )}
          </Section>
          {pageData.advantages && pageData.advantages.length > 0 && (
            <Section>
              <Heading type="h2" className={styles.pageTitle}>
                Advantages
              </Heading>
              <Advantages list={pageData.advantages} />
              {pageData.seoText && (
                <div className={styles.seoText}>{parse(pageData.seoText)}</div>
              )}
            </Section>
          )}
          <Section>
            <Heading type="h2" className={styles.pageTitle}>
              Skills acquired
            </Heading>
            <div className={styles.skills}>
              {pageData.tags.map((t) => (
                <Tag key={t} color="primary">
                  {t}
                </Tag>
              ))}
            </div>
          </Section>
        </>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  let paths: { type: string; alias: string }[] = [];

  for (const category of firstLevelCategories) {
    const res = await fetch(API.topPage.find, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        firstCategory: category.id,
      }),
    });
    const menu = (await res.json()) as IMenuItem[];

    paths = paths.concat(
      menu.flatMap((m) =>
        m.pages.map((p) => ({
          type: category.route,
          alias: p.alias,
        })),
      ),
    );
  }
  console.log('paths', paths);

  return paths;
}
