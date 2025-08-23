import parse from 'html-react-parser';
import { Section } from '@/ui';

import styles from './seoText.module.scss';

interface SeoTextProps {
  text?: string;
}

export const SeoText = ({ text }: SeoTextProps) => {
  return (
    <>{text && <Section className={styles.wrapper}>{parse(text)}</Section>}</>
  );
};
