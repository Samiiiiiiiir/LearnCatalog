import { Heading, Paragraph, Section } from '@/ui';

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { AboutUsImg } from '@/assets';

import styles from './aboutUs.module.scss';

export const AboutUs = () => {
  return (
    <Section className={styles.aboutUs}>
      <div className={styles.inner}>
        <Heading type="h1">
          Connecting You to the Best Learning Opportunities
        </Heading>
        <Paragraph size="lg" className={styles.text}>
          Our catalog brings together courses from a wide range of learning
          platforms and providers. Here you’ll find hundreds of programs, from
          short intensives to comprehensive learning platforms and interactive
          simulators. At the core of our work is a careful approach to content
          selection. We track trending topics, analyze the quality of materials,
          and help you find courses that are not just “for the sake of it,” but
          truly bring value and results.
        </Paragraph>
        <div className={styles.links}>
          <Link
            className={clsx(styles.link, styles.courseLink)}
            href="/courses"
          >
            All Courses
          </Link>
          <Link className={clsx(styles.link, styles.aboutLink)} href="#">
            About Us
          </Link>
        </div>
      </div>
      <Image className={styles.image} src={AboutUsImg} alt="" />
    </Section>
  );
};
