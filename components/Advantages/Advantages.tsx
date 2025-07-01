import { Paragraph, Heading } from '@/components';
import { Advantage } from '@/types';

import CheckIcon from './check.svg';

import styles from './advantages.module.scss';

interface AdvantagesProps {
  list: Advantage[];
}

export const Advantages = ({ list }: AdvantagesProps) => {
  return (
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
  );
};
