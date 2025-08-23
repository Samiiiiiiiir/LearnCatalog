'use client';

import { useReducer } from 'react';

import { Heading, Paragraph, Section, Sort, Tag } from '@/ui';
import { ProductCard } from '@/widgets';
import { IProductItem, ISortType } from '@/types';
import { SortReducer } from './sort.reducer';

import styles from './productList.module.scss';

interface ProductsProps {
  title: string;
  items: IProductItem[];
  tags: string[];
}

export const ProductList = ({ title, items, tags }: ProductsProps) => {
  const [state, dispatch] = useReducer(SortReducer, {
    sort: null,
    products: items,
  });

  const setType = (type: ISortType) => {
    dispatch({ type });
  };

  return (
    <>
      {state.products.length > 0 ? (
        <Section>
          <div className={styles.title}>
            <div className={styles.titleInner}>
              <Heading type="h1">{title}</Heading>
              <Tag
                aria-label={`${state.products.length} elements`}
                color="gray"
              >
                {state.products.length}
              </Tag>
              <Sort type={state.sort} setType={setType} />
            </div>

            <div className={styles.skills}>
              {tags.map((t) => (
                <Tag key={t} color="primary">
                  {t}
                </Tag>
              ))}
            </div>
          </div>

          <ul className={styles.list}>
            {state.products.map((p) => (
              <li key={p._id}>
                <ProductCard layout {...p} />
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <Section>
          <Heading type="h2" style={{ marginBottom: '1rem' }}>
            No courses available in this category yet
          </Heading>
          <Paragraph>
            We’re constantly updating our catalog and will add new courses here
            soon.
          </Paragraph>
        </Section>
      )}
    </>
  );
};
