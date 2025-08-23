import { Paragraph, Rating } from '@/ui';
import { IReview } from '@/types';
import { formatDate } from '@/helpers';

import { UserIcon } from '@/assets';

import styles from './reviews.module.scss';

interface ReviewProps {
  list: IReview[] | undefined;
}

export const Review = ({ list }: ReviewProps) => {
  return (
    <>
      {list && list.length > 0 && (
        <>
          {list.map((i) => (
            <div className={styles.reviewItem} key={i._id}>
              <div className={styles.reviewItemHeader}>
                <UserIcon />
                <div className={styles.reviewNameWrapper}>
                  <span className={styles.reviewItemName}>
                    {i.name}:&nbsp;&nbsp;
                  </span>
                  <span>{i.title}</span>
                </div>
                <time className={styles.date} dateTime={i.createdAt}>
                  {formatDate(i.createdAt)}
                </time>
                <Rating className={styles.rating} initialRating={i.rating} />
              </div>
              <Paragraph>{i.description}</Paragraph>
            </div>
          ))}
        </>
      )}
    </>
  );
};
