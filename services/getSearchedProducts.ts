import axios from 'axios';
import { API } from '@/config';
import { ISearchedProducts, ISearchedResponse } from '@/types';

export const getSearchedProducts = async (
  value: string,
  offset: number = 0,
): Promise<{ courses: ISearchedProducts; totalCourses: number }> => {
  let courses: ISearchedProducts = [],
    totalCourses = 0;

  try {
    const { data } = await axios.get<ISearchedResponse>(`${API.byValue.find}`, {
      params: { value, offset },
    });

    courses = data.results;
    totalCourses = data.total;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('Unknown error', e);
    }
  }

  return {
    courses,
    totalCourses,
  };
};
