import { useEffect, useState } from 'react';
import axios from 'axios';
import { UseFormReset } from 'react-hook-form';
import { API } from '@/config';
import { IFormInputs, IFormStatus, IReviewResponse } from '@/types';

export const useReviewForm = ({
  reset,
  productId,
}: {
  reset: UseFormReset<IFormInputs>;
  productId: string;
}) => {
  const [formStatus, setFormStatus] = useState<IFormStatus>(IFormStatus.IDLE);

  const isIdle = formStatus === IFormStatus.IDLE;
  const isSuccess = formStatus === IFormStatus.SUCCESS;
  const isError = formStatus === IFormStatus.ERROR;

  useEffect(() => {
    if (
      formStatus === IFormStatus.ERROR ||
      formStatus === IFormStatus.SUCCESS
    ) {
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
      const { data } = await axios.post<IReviewResponse>(API.review.create, {
        ...formData,
        productId,
      });

      if (data.message) {
        setFormStatus(IFormStatus.SUCCESS);
      }
    } catch {
      setFormStatus(IFormStatus.ERROR);
    }
    reset();
  };

  return {
    formStatus,
    isIdle,
    isError,
    isSuccess,
    onSubmit,
    setFormStatus,
  };
};
