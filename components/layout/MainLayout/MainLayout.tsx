import { IMenuItem } from '@/types';
import { PropsWithChildren } from 'react';
import { Header, Sidebar, Footer } from '@/components';

import styles from './mainLayout.module.scss';

interface MainLayoutProps extends PropsWithChildren {
  data: IMenuItem[];
}

export const MainLayout = ({ data, children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header data={[data]} className={styles.header} />
      <Sidebar data={[data]} className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
