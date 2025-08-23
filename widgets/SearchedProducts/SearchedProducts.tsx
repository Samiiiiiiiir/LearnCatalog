'use client';

import { Section, Heading, Button } from '@/ui';
import { ProductCard } from '@/widgets';
import { ISearchedProducts } from '@/types';

import { useSearchedProducts } from './hooks/useSearchedProducts';
import styles from './searchedProducts.module.scss';

interface SearchedProductsProps {
  data: ISearchedProducts;
  value: string;
  total: number;
}

export const SearchedProducts = ({
  data,
  value,
  total,
}: SearchedProductsProps) => {
  const { courses, status, loadMore } = useSearchedProducts({
    data,
    offset: data.length,
    total,
  });

  return (
    <Section>
      {data.length > 0 ? (
        <>
          <Heading className={styles.title} type="h1">
            Found Courses matching{' '}
            <span className={styles.value}>&#171;{value}&#187;</span>{' '}
            <span className={styles.total}>{total ? `(${total})` : ''}</span>
            {':'}
          </Heading>
          <ul className={styles.products}>
            {courses.map((i) => (
              <li key={i._id}>
                <ProductCard {...i} />
              </li>
            ))}
          </ul>
          {courses.length < total ? (
            <Button
              appearance="secondary"
              className={styles.loadButton}
              onClick={() => loadMore(value)}
              disabled={status === 'loading'}
            >
              {status === 'idle' ? 'Load more' : 'Loading...'}
            </Button>
          ) : (
            <></>
          )}
        </>
      ) : (
        <Heading type="h1">
          No courses found for{' '}
          <span className={styles.notFoundValue}>&#171;{value}&#187;.</span> Try
          another search?
        </Heading>
      )}
    </Section>
  );
};
