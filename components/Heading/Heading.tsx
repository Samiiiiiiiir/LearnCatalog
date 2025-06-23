import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './heading.module.scss';
import clsx from 'clsx';

interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}

export const Heading = ({
  type,
  children,
  className,
  ...props
}: HeadingProps) => {
  return (
    <>
      {type === 'h1' && (
        <h1 className={clsx(className, styles.h1)} {...props}>
          {children}
        </h1>
      )}
      {type === 'h2' && (
        <h2 className={clsx(className, styles.h2)} {...props}>
          {children}
        </h2>
      )}
      {type === 'h3' && (
        <h3 className={clsx(className, styles.h3)} {...props}>
          {children}
        </h3>
      )}
    </>
  );
};
