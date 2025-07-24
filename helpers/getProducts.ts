import axios from 'axios';
import { API } from './api';
import { IProductItem } from '@/types';

export const getProducts = async (
  category: string,
  limit: number,
): Promise<IProductItem[]> => {
  try {
    const res = await axios.post<IProductItem[]>(API.product.find, {
      category,
      limit,
    });
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error(e.message);
    } else {
      console.error('Unknown error while fetching products:', e);
    }

    return [];
  }
};
