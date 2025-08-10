import axios from 'axios';
import { SearchedProducts } from '@/components';
import { API } from '@/helpers';
import { ISearchedProducts, ISearchedResponse } from '@/types';

interface SearchPageProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { value } = await searchParams;

  let courses: ISearchedProducts = [],
    totalCourses = 0;

  try {
    const { data } = await axios.get<ISearchedResponse>(`${API.byValue.find}`, {
      params: { value, offset: 0 },
    });

    courses = data.results;
    totalCourses = data.total;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('Unknown error', e);
    }

    courses = [];
  }

  return (
    <>
      <SearchedProducts value={value} data={courses} total={totalCourses} />
    </>
  );
}
