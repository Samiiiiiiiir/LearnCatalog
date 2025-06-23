import { Heading, Tag, VacancyStats } from '@/components';
import { API } from '@/helpers/api';
import { firstLevelCategories } from '@/helpers/firstLevelCategories';
import { IMenuItem } from '@/types/MenuItem';
import { IProductItem } from '@/types/ProductItem';
import { ITopPage } from '@/types/TopPage';
import { notFound } from 'next/navigation';
import React from 'react';
import styles from './page.module.scss';

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
      <div className={styles.pageTitle}>
        <Heading type="h1">{pageData.title}</Heading>
        {products && <Tag color="gray">{products.length}</Tag>}
        <span>Sort component</span>
      </div>
      <div>
        {products.map((p) => (
          <div key={p._id}>{p.title}</div>
        ))}
      </div>
      <div className={styles.linkedinTitle}>
        <Heading type="h2">Jobs - {pageData.category}</Heading>
        <Tag color="blue">LinkedIn</Tag>
      </div>
      {type == 'courses' && (
        <VacancyStats
          count={pageData.hh.count}
          juniorSalary={pageData.hh.juniorSalary}
          middleSalary={pageData.hh.middleSalary}
          seniorSalary={pageData.hh.seniorSalary}
        />
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
