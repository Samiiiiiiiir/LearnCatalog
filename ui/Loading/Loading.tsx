'use client';

import { PulseLoader } from 'react-spinners';

import styles from './loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <PulseLoader size={18} color="#0056d2" speedMultiplier={0.8} />
    </div>
  );
};
