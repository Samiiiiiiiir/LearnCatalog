import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Header = ({ className }: HeaderProps) => {
  return <header className={clsx(className)}>Header</header>;
};
