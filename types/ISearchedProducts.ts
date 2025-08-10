import { IProductItem } from './IProductItem';

interface ISearchedProductItem extends IProductItem {
  score: number;
}

export type ISearchedProducts = ISearchedProductItem[];
