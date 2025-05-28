import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './paragraph.module.scss';

interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Paragraph = ({
  children,
  size = 'md',
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        {
          [styles.sm]: size == 'sm',
          [styles.md]: size == 'md',
          [styles.lg]: size == 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
