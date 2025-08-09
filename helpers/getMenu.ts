import { IMenuItem } from '@/types';
import { FirstLevelCategoryId } from './firstLevelCategories';

import axios from 'axios';
import { API } from './api';

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
