import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './footer.module.scss';
import { socialsList } from './socialsList';

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={clsx(styles.footer, className)} {...props}>
      <div className={styles.contacts}>
        <div className={styles.contactBlock}>
          <span>Having problems with the course?</span>
          <Link href="mailto:connect@gmail.com" className={styles.link}>
            connect@gmail.com
          </Link>
        </div>
        <div className={styles.contactBlock}>
          <span>Let&apos;s work together?</span>
          <Link href="mailto:partnerships@gmail.com" className={styles.link}>
            partnerships@gmail.com
          </Link>
        </div>

        <div className={styles.logoSocials}>
          <Link href="/" className={styles.brand}>
            LearnCatalog
          </Link>
          <div className={styles.socials}>
            {socialsList.map(({ href, label, Icon }) => (
              <Link
                className={styles.socialsItem}
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
              >
                <Icon width={48} height={48} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <span>
          © {new Date().getFullYear()} LearnCatalog Inc. All rights reserved.
        </span>
        <div className={styles.privacy}>
          <Link href="#" target="_blank" className={styles.link}>
            User Agreement
          </Link>
          <Link href="#" target="_blank" className={styles.link}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
