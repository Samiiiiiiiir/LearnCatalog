import { PropsWithChildren } from 'react';
import { Header, Sidebar, Footer } from '@/components';
import { FirstLevelCategoryId } from '@/helpers';
import { getMenu } from '@/services';

import styles from './mainLayout.module.scss';

interface MainLayoutProps extends PropsWithChildren {}

export const MainLayout = async ({ children }: MainLayoutProps) => {
  const data = await getMenu(FirstLevelCategoryId.Courses);

  return (
    <div className={styles.layout}>
      <Header data={[data]} className={styles.header} />
      <Sidebar data={[data]} className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
