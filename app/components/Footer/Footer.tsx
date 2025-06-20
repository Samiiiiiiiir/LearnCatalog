import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './footer.module.scss';

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={clsx(styles.footer, className)} {...props}>
      <span>
        © {new Date().getFullYear()} Coursera Inc. All rights reserved.
      </span>
      <div className={styles.inner}>
        <a href="#" target="_blank" className={styles.link}>
          User Agreement
        </a>
        <a href="#" target="_blank" className={styles.link}>
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};
