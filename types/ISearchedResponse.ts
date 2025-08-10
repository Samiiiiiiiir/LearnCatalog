import { ISearchedProducts } from './ISearchedProducts';

export interface ISearchedResponse {
  limit: number;
  offset: number;
  query: string;
  results: ISearchedProducts;
  tookMs: number;
  total: number;
}
