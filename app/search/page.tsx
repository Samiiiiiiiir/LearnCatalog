import { SearchedProducts } from '@/components';
import { getSearchedProducts } from '@/services';

interface SearchPageProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { value } = await searchParams;

  const { courses, totalCourses } = await getSearchedProducts(value);

  return (
    <>
      <SearchedProducts value={value} data={courses} total={totalCourses} />
    </>
  );
}
