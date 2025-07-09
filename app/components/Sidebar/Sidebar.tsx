'use client';

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Logo, SearchBar } from '@/components';

import { IMenuItem } from '@/types';
import { Menu } from './../Menu/Menu';

import styles from './sidebar.module.scss';

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  data: IMenuItem[][];
}

export const Sidebar = ({ data, className, ...props }: SidebarProps) => {
  return (
    <aside className={clsx(styles.sidebar, className)} {...props}>
      <Logo />
      <SearchBar />
      <Menu data={data} />
    </aside>
  );
};
