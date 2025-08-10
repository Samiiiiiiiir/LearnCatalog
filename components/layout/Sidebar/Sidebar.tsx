'use client';

import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';
import clsx from 'clsx';
import { Logo, Menu, SearchBar } from '@/components';

import { IMenuItem } from '@/types';

import styles from './sidebar.module.scss';

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  data: IMenuItem[][];
  setisMenuOpened?: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({
  data,
  setisMenuOpened,
  className,
  ...props
}: SidebarProps) => {
  return (
    <aside className={clsx(styles.sidebar, className)} {...props}>
      <Logo />
      <SearchBar setisMenuOpened={setisMenuOpened} />
      <Menu data={data} />
    </aside>
  );
};
