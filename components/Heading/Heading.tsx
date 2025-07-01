import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './heading.module.scss';

interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type: 'h1' | 'h2' | 'h3' | 'h4';
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
      {type === 'h4' && (
        <h4 className={clsx(className, styles.h4)} {...props}>
          {children}
        </h4>
      )}
    </>
  );
};
