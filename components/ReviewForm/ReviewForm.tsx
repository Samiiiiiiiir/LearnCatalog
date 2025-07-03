'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Button, Input, Paragraph, Rating, Textarea } from '@/components';

import styles from './reviewForm.module.scss';

interface ReviewFormProps {
  productId: string;
}

export const ReviewForm = ({ productId }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);

  console.log(rating, `product: ${productId}`);

  return (
    <form className={styles.form}>
      <Input name="name" placeholder="Your name" className={styles.inputName} />
      <Input name="title" placeholder="Review title" />

      <div className={styles.rating}>
        <span>Your rating:&nbsp;&nbsp;</span>
        <Rating
          isEditable={true}
          initialRating={rating}
          setRating={setRating}
        />
      </div>

      <Textarea
        name="text"
        placeholder="Review text"
        className={styles.textarea}
      />

      <Button>Send</Button>
      <Paragraph className={styles.notice}>
        * Before publication, the review will undergo preliminary moderation and
        verification
      </Paragraph>

      <Paragraph
        className={clsx(styles.statusMessage, {
          [styles.success]: true,
          [styles.error]: false,
        })}
      >
        {true ? 'Review sent successfully!' : 'Something went wrong!'}
      </Paragraph>
    </form>
  );
};
