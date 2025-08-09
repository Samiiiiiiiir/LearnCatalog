import Link from 'next/link';
import { Paragraph, Heading, Section } from '@/components';

import styles from './banner.module.scss';

interface BannerProps {
  bgImage: string;
  heading: string;
  text: string;
  linkHref: string;
  linkText: string;
}

export const Banner = ({
  linkText,
  linkHref,
  text,
  heading,
  bgImage,
}: BannerProps) => {
  return (
    <Section>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.contentBlock}>
          <Heading type="h1">{heading}</Heading>
          <Paragraph className={styles.text} size="md">
            {text}
          </Paragraph>
          <Link href={linkHref} className={styles.button}>
            {linkText}
          </Link>
        </div>
      </div>
    </Section>
  );
};
