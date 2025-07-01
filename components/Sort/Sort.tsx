'use client';

import clsx from 'clsx';
import { SortType } from '@/types';

import SortIcon from './sort.svg';

import styles from './sort.module.scss';

interface SortProps {
  type: SortType | null;
  setType: (type: SortType) => void;
}

export const Sort = ({ type, setType }: SortProps) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={clsx(styles.item, type == SortType.RATING && styles.active)}
        onClick={() => setType(SortType.RATING)}
      >
        <SortIcon className={styles.icon} />
        <span>By rating</span>
      </button>
      <button
        className={clsx(styles.item, type == SortType.PRICE && styles.active)}
        onClick={() => setType(SortType.PRICE)}
      >
        <SortIcon className={styles.icon} />
        <span>By price</span>
      </button>
    </div>
  );
};
