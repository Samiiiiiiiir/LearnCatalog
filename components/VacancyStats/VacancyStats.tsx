import { Card } from '../Card/Card';
import styles from './vacancyStats.module.scss';
import RateIcon from './Rate.svg';
import { FormattedPrice } from '../FormattedPrice/FormattedPrice';

interface VacancyStatsProps {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export const VacancyStats = (props: VacancyStatsProps) => {
  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.card}>
          <div className={styles.title}>Total vacancies</div>
          <div className={styles.vacanciesCount}>{props.count}</div>
        </div>
      </Card>

      <Card className={styles.levelsWrapper}>
        <div className={styles.card}>
          <div className={styles.title}>Junior</div>
          <FormattedPrice
            price={props.juniorSalary}
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
            price={props.middleSalary}
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
            price={props.seniorSalary}
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
  );
};
