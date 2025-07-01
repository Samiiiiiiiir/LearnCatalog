import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './header.module.scss';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={clsx(styles.header, className)} {...props}>
      Header
    </header>
  );
};
