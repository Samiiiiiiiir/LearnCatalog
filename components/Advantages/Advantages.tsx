import { Advantage } from '@/types/TopPage';
import React from 'react';
import { Heading } from '../Heading/Heading';

import styles from './advantages.module.scss';
import { Paragraph } from '../Paragraph/Paragraph';
import CheckIcon from './check.svg';

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
