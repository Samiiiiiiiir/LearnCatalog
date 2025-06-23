import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

import styles from './section.module.scss';
import clsx from 'clsx';

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Section = ({
  className,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className={clsx(styles.section, className)}>{children}</section>
  );
};
