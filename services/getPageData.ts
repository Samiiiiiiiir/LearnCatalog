import axios from 'axios';
import { API } from '@/config';
import { ITopPage } from '@/types';

export const getPageData = async (alias: string): Promise<ITopPage> => {
  const res = await axios.get<ITopPage>(`${API.topPage.byAlias}/${alias}`);
  return res.data;
};
