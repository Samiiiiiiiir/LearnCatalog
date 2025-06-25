import { Menu } from '@/app/components/Menu/Menu';
import { API } from '@/helpers/api';
import { FirstLevelCategoryId } from '@/helpers/firstLevelCategories';
import { IMenuItem } from '@/types/MenuItem';
import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './sidebar.module.scss';
import { Logo, SearchBar } from '@/components';

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Sidebar = async ({ className, ...props }: SidebarProps) => {
  const data = await Promise.all([
    getMenu(FirstLevelCategoryId.Courses),
    getMenu(FirstLevelCategoryId.Services),
  ]);

  return (
    <aside className={clsx(styles.sidebar, className)} {...props}>
      <Logo />
      <SearchBar />
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
  } catch {
    return [];
  }
};
