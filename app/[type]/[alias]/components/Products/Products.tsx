'use client';

import { Heading, Input, Section, Sort, Tag, Textarea } from '@/components';
import { useReducer } from 'react';
import styles from './products.module.scss';
import { IProductItem } from '@/types/ProductItem';
import { SortType } from '@/types/SortType';
import { SortReducer } from './sort.reducer';

interface ProductsProps {
  title: string;
  items: IProductItem[];
}

export const Products = ({ title, items }: ProductsProps) => {
  const [state, dispatch] = useReducer(SortReducer, {
    sort: null,
    products: items,
  });

  const setType = (type: SortType) => {
    dispatch({ type });
  };

  return (
    <Section>
      <div className={styles.title}>
        <Heading type="h1">{title}</Heading>
        <Tag color="gray">{state.products.length}</Tag>
        <Sort type={state.sort} setType={setType} />
      </div>
      <div>
        <Input placeholder="Test" />
        <Textarea placeholder="Testtst" />
        {state.products.map((p) => (
          <div key={p._id}>{p.title}</div>
        ))}
      </div>
    </Section>
  );
};
