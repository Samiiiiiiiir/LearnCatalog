import { IPageItem } from './PageItem';

export interface IMenuItem {
  _id: {
    secondCategory: string;
  };
  pages: IPageItem[];
  isOpen: boolean;
}
