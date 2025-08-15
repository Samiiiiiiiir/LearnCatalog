import axios from 'axios';
import { IMenuItem } from '@/types';
import { FirstLevelCategoryId } from '@/helpers';
import { API } from '@/config';

export const getMenu = async (
  category: FirstLevelCategoryId,
): Promise<IMenuItem[]> => {
  try {
    const res = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: category,
    });

    return res.data.map((i) => ({ ...i, isOpen: false })) as IMenuItem[];
  } catch {
    return [];
  }
};
