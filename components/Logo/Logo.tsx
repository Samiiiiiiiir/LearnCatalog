import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <Image
        src="https://i.ibb.co/s9HVL7YH/logo.png"
        width={140}
        height={63}
        alt="logo"
      />
    </Link>
  );
};
