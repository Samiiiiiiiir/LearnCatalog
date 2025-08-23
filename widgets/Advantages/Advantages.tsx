import { Paragraph, Heading, Section } from '@/ui';
import { Advantage } from '@/types';
import { CheckIcon } from '@/assets';

import styles from './advantages.module.scss';

interface AdvantagesProps {
  list?: Advantage[];
}

export const Advantages = ({ list }: AdvantagesProps) => {
  return (
    <>
      {list && list.length > 0 && (
        <Section title="Advantages">
          <ul className={styles.list}>
            {list.map((i) => (
              <li key={i._id} className={styles.item}>
                <CheckIcon />
                <Heading type="h3" className={styles.title}>
                  {i.title}
                </Heading>
                <div className={styles.line} />
                <Paragraph>{i.description}</Paragraph>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};
