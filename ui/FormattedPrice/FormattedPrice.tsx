import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { formatPrice } from '@/helpers';

interface FormattedPriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
}

export const FormattedPrice = ({ price, ...props }: FormattedPriceProps) => {
  const formatted = formatPrice(price);

  return <div {...props}>{formatted}</div>;
};
