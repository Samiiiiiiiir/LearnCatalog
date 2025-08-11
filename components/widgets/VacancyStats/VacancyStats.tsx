import { Card, FormattedPrice, Section } from '@/components';
import { RateIcon } from '@/assets';
import { Ln } from '@/types';

import styles from './vacancyStats.module.scss';

interface VacancyStatsProps {
  ln?: Ln;
  category: string;
}

export const VacancyStats = ({ ln, category }: VacancyStatsProps) => {
  return (
    <>
      {ln && (
        <Section title={`Jobs - ${category}`}>
          <div className={styles.wrapper}>
            <Card>
              <div className={styles.card}>
                <div className={styles.title}>Total vacancies</div>
                <div className={styles.vacanciesCount}>{ln.count}</div>
              </div>
            </Card>

            <Card className={styles.levelsWrapper}>
              <div className={styles.card}>
                <div className={styles.title}>Junior</div>
                <FormattedPrice
                  price={ln.juniorSalary}
                  className={styles.salary}
                />
                <div className={styles.rate}>
                  <RateIcon className={styles.filled} />
                  <RateIcon />
                  <RateIcon />
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.title}>Middle</div>
                <FormattedPrice
                  price={ln.middleSalary}
                  className={styles.salary}
                />
                <div className={styles.rate}>
                  <RateIcon className={styles.filled} />
                  <RateIcon className={styles.filled} />
                  <RateIcon />
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.title}>Senior</div>
                <FormattedPrice
                  price={ln.seniorSalary}
                  className={styles.salary}
                />
                <div className={styles.rate}>
                  <RateIcon className={styles.filled} />
                  <RateIcon className={styles.filled} />
                  <RateIcon className={styles.filled} />
                </div>
              </div>
            </Card>
          </div>
        </Section>
      )}
    </>
  );
};
