import { Menu } from '@/app/components/Menu/Menu';
import { API } from '@/constants/api';
import { IMenuItem } from '@/types/MenuItem';
import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export enum FirstLevelCategoryId {
  Courses,
  Services,
  Books,
  Products,
}

export const Sidebar = async ({ className, ...props }: SidebarProps) => {
  const data = await Promise.all([
    getMenu(FirstLevelCategoryId.Courses),
    getMenu(FirstLevelCategoryId.Services),
  ]);

  console.log('data', data);

  return (
    <aside className={clsx(className)} {...props}>
      <Menu data={data} />
    </aside>
  );
};

const getMenu = async (category: FirstLevelCategoryId) => {
  try {
    const res = await fetch(API.topPage.find, {
      method: 'POST',
      body: JSON.stringify({
        firstCategory: category,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data: IMenuItem[] = await res.json();

    return data.map((i) => ({ ...i, isOpen: false })) as IMenuItem[];
  } catch (e) {
    console.log(e);
    return [];
  }
};
