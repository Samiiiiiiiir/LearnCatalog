'use client';

import React from 'react';
import styles from './sort.module.scss';
import { SortType } from '@/types/SortType';
import SortIcon from './sort.svg';
import clsx from 'clsx';

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
