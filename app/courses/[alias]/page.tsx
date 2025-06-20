import { API } from '@/constants/api';
// import { fetchData } from '@/lib/fetchData';
import { IMenuItem } from '@/types/MenuItem';
import { ITopPage } from '@/types/TopPage';
import { notFound } from 'next/navigation';
import React from 'react';

interface CoursesProps {
  params: Promise<{ alias: string }>;
}

export default async function Course({ params }: CoursesProps) {
  const { alias } = await params;

  // const data = await fetchData<ITopPage>(`${API.topPage.byAlias}${alias}`)
  const res = await fetch(`${API.topPage.byAlias}${alias}`, {
    next: {
      revalidate: 5,
    },
  });
  const data = (await res.json()) as ITopPage;
  // console.log('data', data);

  if (!data) {
    notFound();
  }

  // console.log(alias);

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.seoText}</p>
    </div>
  );
}

export async function generateStaticParams() {
  // console.log('REVALIDATE');

  const res = await fetch(API.topPage.find, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      firstCategory: 0,
    }),
  });

  const menu = (await res.json()) as IMenuItem[];

  return menu.flatMap((m) =>
    m.pages.map((p) => ({
      alias: p.alias,
    })),
  );
}
