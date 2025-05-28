import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './tag.module.scss';
import clsx from 'clsx';

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md';
  color?: 'blue' | 'ghost' | 'primary' | 'green' | 'gray';
  href?: string;
}

export const Tag = ({
  size = 'md',
  color = 'ghost',
  href,
  children,
  className,
  ...props
}: TagProps) => {
  return (
    <div
      className={clsx(
        styles.tag,
        {
          [styles.sm]: size == 'sm',
          [styles.md]: size == 'md',
          [styles.blue]: color == 'blue',
          [styles.ghost]: color == 'ghost',
          [styles.primary]: color == 'primary',
          [styles.green]: color == 'green',
          [styles.gray]: color == 'gray',
        },
        className,
      )}
      {...props}
    >
      {href ? (
        <a href={href} target="_blank">
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};
