import { notFound } from 'next/navigation';
import axios from 'axios';
import { API } from './api';
import { ITopPage } from '@/types';

export const getPageData = async (alias: string): Promise<ITopPage> => {
  try {
    const res = await axios.get<ITopPage>(`${API.topPage.byAlias}/${alias}`);
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      notFound();
    }
    throw e;
  }
};
