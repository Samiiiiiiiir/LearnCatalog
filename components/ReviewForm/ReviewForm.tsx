'use client';

import clsx from 'clsx';
import { Button, Input, Paragraph, Rating, Textarea } from '@/components';

import styles from './reviewForm.module.scss';
import { Controller, useForm } from 'react-hook-form';

interface ReviewFormProps {
  productId: string;
}

interface Inputs {
  name: string;
  title: string;
  desc: string;
  rating: number;
}

export const ReviewForm = ({ productId }: ReviewFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(productId, data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={clsx(styles.label, styles.nameLabel)}>
        <Input
          className={clsx(errors.name && styles.fieldError)}
          placeholder="Your name"
          {...register('name', {
            required: { value: true, message: 'Name is required' },
          })}
        />
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name.message}</span>
        )}
      </label>
      <label className={styles.label}>
        <Input
          className={clsx(errors.title && styles.fieldError)}
          placeholder="Review title"
          {...register('title', {
            required: {
              value: true,
              message: 'Title is required',
            },
          })}
        />
        {errors.title && (
          <span className={styles.errorMessage}>{errors.title.message}</span>
        )}
      </label>
      <div className={styles.rating}>
        <span>Your rating:&nbsp;&nbsp;</span>
        <Controller
          control={control}
          name="rating"
          rules={{ required: { value: true, message: 'Rating is required' } }}
          render={({ field: { onChange, value, ref } }) => (
            <Rating
              isEditable={true}
              initialRating={value}
              setRating={onChange}
              ref={ref}
              className={clsx(errors.rating && styles.ratingError)}
            />
          )}
        />
        {errors.rating && (
          <span className={styles.errorMessage}>{errors.rating.message}</span>
        )}
      </div>
      <label className={clsx(styles.label, styles.textLabel)}>
        <Textarea
          className={clsx(errors.desc?.message && styles.fieldError)}
          placeholder="Review text"
          {...register('desc', {
            required: {
              value: true,
              message: 'Description is required',
            },
          })}
        />
        {errors.desc && (
          <span className={styles.errorMessage}>{errors.desc.message}</span>
        )}
      </label>
      <Button>Send</Button>
      <Paragraph className={styles.notice}>
        * Before publication, the review will undergo preliminary moderation and
        verification
      </Paragraph>
      {/*       <Paragraph
        className={clsx(styles.statusMessage, {
          [styles.statusSuccess]: true,
          [styles.statusError]: false,
        })}
      >
        {true ? 'Review sent successfully!' : 'Something went wrong!'}
      </Paragraph> */}
    </form>
  );
};
