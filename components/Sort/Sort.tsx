'use client';

import clsx from 'clsx';
import { ISortType } from '@/types';

import SortIcon from './sort.svg';

import styles from './sort.module.scss';

interface SortProps {
  type: ISortType | null;
  setType: (type: ISortType) => void;
}

export const Sort = ({ type, setType }: SortProps) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={clsx(styles.item, type == ISortType.RATING && styles.active)}
        onClick={() => setType(ISortType.RATING)}
      >
        <SortIcon className={styles.icon} />
        <span>By rating</span>
      </button>
      <button
        className={clsx(styles.item, type == ISortType.PRICE && styles.active)}
        onClick={() => setType(ISortType.PRICE)}
      >
        <SortIcon className={styles.icon} />
        <span>By price</span>
      </button>
    </div>
  );
};
