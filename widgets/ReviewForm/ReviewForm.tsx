'use client';

import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';

import { IFormInputs, IFormStatus } from '@/types';
import { Button, Heading, Input, Paragraph, Rating, Textarea } from '@/ui';
import { CloseIcon } from '@/assets';

import { useReviewForm } from './hooks/useReviewForm';
import styles from './reviewForm.module.scss';

interface ReviewFormProps {
  productId: string;
}

export const ReviewForm = ({ productId }: ReviewFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm<IFormInputs>();

  const { isIdle, isError, isSuccess, onSubmit, setFormStatus } = useReviewForm(
    {
      reset,
      productId,
    },
  );

  return (
    <>
      {isIdle && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={clsx(styles.label, styles.nameLabel)}>
            <Input
              className={clsx(errors.name && styles.fieldError)}
              placeholder="Your name"
              {...register('name', {
                required: { value: true, message: 'Name is required' },
                pattern: {
                  value: /\S/,
                  message: 'Name is required',
                },
              })}
            />
            {errors.name && (
              <span role="alert" className={styles.errorMessage}>
                {errors.name.message}
              </span>
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
                pattern: {
                  value: /\S/,
                  message: 'Title is required',
                },
              })}
            />
            {errors.title && (
              <span role="alert" className={styles.errorMessage}>
                {errors.title.message}
              </span>
            )}
          </label>
          <div className={styles.rating}>
            <span>Your rating:&nbsp;&nbsp;</span>
            <Controller
              control={control}
              name="rating"
              rules={{
                required: { value: true, message: 'Rating is required' },
              }}
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
              <span role="alert" className={styles.errorMessage}>
                {errors.rating.message}
              </span>
            )}
          </div>
          <label className={clsx(styles.label, styles.textLabel)}>
            <Textarea
              className={clsx(errors.description?.message && styles.fieldError)}
              placeholder="Review text"
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description is required',
                },
                pattern: {
                  value: /\S/,
                  message: 'Description is required',
                },
              })}
            />
            {errors.description && (
              <span role="alert" className={styles.errorMessage}>
                {errors.description.message}
              </span>
            )}
          </label>
          <Button
            className={styles.sendButton}
            disabled={isSubmitting}
            onClick={() => clearErrors()}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
          <Paragraph className={styles.notice}>
            * Before publication, the review will undergo preliminary moderation
            and verification
          </Paragraph>
        </form>
      )}
      {(isSuccess || isError) && (
        <div
          className={clsx(styles.statusBlock, styles.statusSuccess, {
            [styles.statusSuccess]: isSuccess,
            [styles.statusError]: isError,
          })}
          role="alert"
        >
          <Heading type="h3">{isSuccess ? 'Thank you!' : 'Ooops!'}</Heading>
          <Paragraph>
            {isSuccess
              ? 'Your review has been successfully submitted and will appear after it passes moderation. We appreciate your feedback.'
              : 'Something went wrong. Please try again.'}
          </Paragraph>
          <Button
            appearance="transparent"
            className={styles.closeBtn}
            onClick={() => setFormStatus(IFormStatus.IDLE)}
            aria-label="Close notification"
          >
            <CloseIcon />
          </Button>
        </div>
      )}
    </>
  );
};
