import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={clsx(className)} {...props}>
      Header
    </header>
  );
};
