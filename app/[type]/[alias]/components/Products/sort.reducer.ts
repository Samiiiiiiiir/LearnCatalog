import { IProductItem, SortType } from '@/types';

type SortActions = { type: SortType };
interface SortReducerState {
  sort: SortType | null;
  products: IProductItem[];
}

export function SortReducer(state: SortReducerState, action: SortActions) {
  switch (action.type) {
    case SortType.RATING:
      return {
        sort: SortType.RATING,
        products: [...state.products].sort(
          (a, b) => (b.reviewAvg ?? 0) - (a.reviewAvg ?? 0),
        ),
      };
    case SortType.PRICE:
      return {
        sort: SortType.PRICE,
        products: [...state.products].sort((a, b) => b.price - a.price),
      };
    default:
      return state;
  }
}
