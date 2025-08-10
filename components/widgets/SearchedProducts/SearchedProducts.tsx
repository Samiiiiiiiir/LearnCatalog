'use client';

import { useEffect, useState } from 'react';
import { Section, Heading, ProductCard, Button } from '@/components';
import { ISearchedProducts, ISearchedResponse } from '@/types';
import { API } from '@/helpers';

import styles from './searchedProducts.module.scss';
import axios from 'axios';

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
  const [courses, setCourses] = useState(data);
  const [offset, setOffset] = useState(data.length);
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const handleFetchMoreCourses = async () => {
    if (offset >= total) return;

    try {
      setStatus('loading');

      const { data } = await axios.get<ISearchedResponse>(
        `${API.byValue.find}`,
        {
          params: { value, offset },
        },
      );
      setOffset((prev) => prev + 10);
      setCourses((prev) => [...prev, ...data.results]);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error('Unknown error', e);
      }
    }
    setStatus('idle');
  };

  useEffect(() => {
    setCourses(data);
  }, [data]);

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
              onClick={handleFetchMoreCourses}
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
