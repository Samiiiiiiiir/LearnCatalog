'use client';

import { useReducer } from 'react';
import { Heading, ProductCard, Section, Sort, Tag } from '@/components';
import { IProductItem, ISortType } from '@/types';
import { SortReducer } from './sort.reducer';

import styles from './products.module.scss';

interface ProductsProps {
  title: string;
  items: IProductItem[];
}

export const Products = ({ title, items }: ProductsProps) => {
  const [state, dispatch] = useReducer(SortReducer, {
    sort: null,
    products: items,
  });

  const setType = (type: ISortType) => {
    dispatch({ type });
  };

  return (
    <Section>
      <div className={styles.title}>
        <Heading type="h1">{title}</Heading>
        <Tag aria-label={`${state.products.length} elements`} color="gray">
          {state.products.length}
        </Tag>
        <Sort type={state.sort} setType={setType} />
      </div>

      <ul className={styles.list}>
        {state.products.map((p) => (
          <li key={p._id}>
            <ProductCard layout {...p} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
