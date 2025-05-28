import { ReactNode } from 'react';

import styles from './heading.module.scss';

interface HeadingProps {
  type: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}

export const Heading = ({ type, children }: HeadingProps) => {
  return (
    <>
      {type === 'h1' && <h1 className={styles.h1}>{children}</h1>}
      {type === 'h2' && <h2 className={styles.h2}>{children}</h2>}
      {type === 'h3' && <h3 className={styles.h3}>{children}</h3>}
    </>
  );
};
