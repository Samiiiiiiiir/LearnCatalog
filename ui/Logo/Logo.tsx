import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <Image
        src="https://i.ibb.co/xSN82Z4n/newlogo.png"
        width={160}
        height={56}
        alt="logo"
      />
    </Link>
  );
};
