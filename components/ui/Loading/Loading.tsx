'use client';

import { InfinitySpin } from 'react-loader-spinner';

import styles from './loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <InfinitySpin color="#0056d2" />
    </div>
  );
};
