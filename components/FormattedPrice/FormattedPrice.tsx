import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface FormattedPriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
}

export const FormattedPrice = ({ price, ...props }: FormattedPriceProps) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return <div {...props}>{formatted}</div>;
};
