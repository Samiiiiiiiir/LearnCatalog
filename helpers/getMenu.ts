import { IMenuItem } from '@/types';
import { FirstLevelCategoryId } from './firstLevelCategories';
import { API } from './api';

export const getMenu = async (category: FirstLevelCategoryId) => {
  try {
    const res = await fetch(API.topPage.find, {
      method: 'POST',
      body: JSON.stringify({
        firstCategory: category,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data: IMenuItem[] = await res.json();

    return data.map((i) => ({ ...i, isOpen: false })) as IMenuItem[];
  } catch {
    return [];
  }
};
