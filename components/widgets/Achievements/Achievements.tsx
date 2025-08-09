import clsx from 'clsx';
import { Card, Heading, Section } from '@/components';

import styles from './achievements.module.scss';
import { InfinityIcon } from '@/assets';

export const Achievements = () => {
  return (
    <Section>
      <Heading type="h2" className="visuallyhidden">
        Achievements
      </Heading>
      <Card className={styles.achievements}>
        <div className={styles.achievementItem}>
          <div className={styles.number}>100+</div>
          <div>
            courses <br /> from top platforms
          </div>
        </div>
        <div className={styles.achievementItem}>
          <div className={styles.number}>2M</div>
          <div>
            active <br /> users
          </div>
        </div>
        <div className={styles.achievementItem}>
          <div className={styles.number}>700K</div>
          <div>
            social <br /> media followers
          </div>
        </div>
        <div className={styles.achievementItem}>
          <div className={clsx(styles.number, styles.infinity)}>
            <InfinityIcon width={54} height={54} />
          </div>
          <div>
            ideas <br /> and inspiration
          </div>
        </div>
      </Card>
    </Section>
  );
};
