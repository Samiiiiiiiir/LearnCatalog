import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';
import { Heading } from '@/ui';

import styles from './section.module.scss';

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title?: string;
}

export const Section = ({
  title,
  className,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className={clsx(styles.section, className)}>
      {title && (
        <Heading type="h2" className={styles.title}>
          {title}
        </Heading>
      )}
      {children}
    </section>
  );
};
