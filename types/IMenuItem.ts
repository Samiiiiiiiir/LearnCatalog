import { IPageItem } from '@/types';

export interface IMenuItem {
  _id: {
    secondCategory: string;
  };
  pages: IPageItem[];
  isOpen: boolean;
}
