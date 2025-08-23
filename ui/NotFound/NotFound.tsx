'use client';

import Link from 'next/link';
import { Paragraph, Heading } from '@/ui';
import { NotFoundIcon } from '@/assets';

import styles from './notFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <NotFoundIcon />
      <Heading type="h1" className={styles.title}>
        404
      </Heading>
      <Paragraph size="lg" className={styles.text}>
        It seems you&apos;ve landed on a page that got lost somewhere in the
        vast galaxy of the Internet...
      </Paragraph>
      <Link href="/" className={styles.link}>
        Return to the homepage
      </Link>
    </div>
  );
};
