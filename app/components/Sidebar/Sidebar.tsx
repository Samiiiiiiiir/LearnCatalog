import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Sidebar = ({ className }: SidebarProps) => {
  return <aside className={clsx(className)}>Sidebar</aside>;
};
