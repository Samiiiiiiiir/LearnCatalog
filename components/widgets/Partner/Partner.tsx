import { Heading, Paragraph, Section } from '@/components';
import Link from 'next/link';

import styles from './partner.module.scss';

export const Partner = () => {
  return (
    <Section className={styles.partner}>
      <Heading type="h2">Become a Partner</Heading>
      <div className={styles.text}>
        <Paragraph size="lg">
          We connect learners with top-quality courses from a variety of
          platforms. We help organizations and brands reach new audiences,
          expand their impact, and promote educational opportunities worldwide.
        </Paragraph>
        <Paragraph size="lg">
          Whether you want to showcase your existing courses, highlight a
          specific program, or collaborate on special promotions, we’ll help you
          create a presence that stands out.
        </Paragraph>
        <Paragraph size="lg">
          Let’s explore how we can work together to bring valuable learning to
          more people. Contact us at{' '}
          <Link href="mailto:partnerships@gmail.com" target="_blank">
            partnerships@gmail.com
          </Link>
        </Paragraph>
      </div>
    </Section>
  );
};
