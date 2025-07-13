'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Button,
  Heading,
  Input,
  Paragraph,
  Rating,
  Textarea,
} from '@/components';
import { API } from '@/helpers';
import { IFormInputs, IFormStatus, IReviewResponse } from '@/types';

import CloseIcon from '@/helpers/icons/close.svg';

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
  const [formStatus, setFormStatus] = useState<IFormStatus>(IFormStatus.IDLE);

  const isSuccess = formStatus == IFormStatus.SUCCESS;
  const isError = formStatus == IFormStatus.ERROR;

  useEffect(() => {
    if (formStatus == IFormStatus.ERROR || formStatus == IFormStatus.SUCCESS) {
      const timeout = setTimeout(() => {
        setFormStatus(IFormStatus.IDLE);
      }, 20000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [formStatus]);

  const onSubmit = async (formData: IFormInputs) => {
    try {
      const { data } = await axios.post<IReviewResponse>(
        API.review.createDemo,
        { ...formData, productId },
      );

      if (data.message) {
        setFormStatus(IFormStatus.SUCCESS);
      }
    } catch {
      setFormStatus(IFormStatus.ERROR);
    }
    reset();
  };

  return (
    <>
      {formStatus == IFormStatus.IDLE && (
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
              })}
            />
            {errors.description && (
              <span role="alert" className={styles.errorMessage}>
                {errors.description.message}
              </span>
            )}
          </label>
          <Button disabled={isSubmitting} onClick={() => clearErrors()}>
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
              ? 'Your review has been successfully submitted. We appreciate your feedback.'
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
