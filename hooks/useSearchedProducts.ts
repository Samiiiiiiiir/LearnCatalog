import { useEffect, useState } from 'react';
import { ISearchedProducts } from '@/types';
import { getSearchedProducts } from '@/services';

export const useSearchedProducts = ({
  data,
  offset,
  total,
}: {
  data: ISearchedProducts;
  offset: number;
  total: number;
}) => {
  const [courses, setCourses] = useState<ISearchedProducts>(data);
  const [currentOffset, setCurrentOffset] = useState(offset);
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  useEffect(() => {
    setCourses(data);
  }, [data]);

  const loadMore = async (value: string) => {
    if (currentOffset >= total) return;
    try {
      setStatus('loading');

      const { courses: fetchedCourses } = await getSearchedProducts(
        value,
        currentOffset,
      );

      setCurrentOffset((prev) => prev + 10);
      setCourses((prev) => [...prev, ...fetchedCourses]);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error('Unknown error', e);
      }
    }
    setStatus('idle');
  };

  return {
    courses,
    status,
    loadMore,
  };
};
