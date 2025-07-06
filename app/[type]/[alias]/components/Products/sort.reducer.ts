import { IProductItem, ISortType } from '@/types';

type SortActions = { type: ISortType };
interface SortReducerState {
  sort: ISortType | null;
  products: IProductItem[];
}

export function SortReducer(state: SortReducerState, action: SortActions) {
  switch (action.type) {
    case ISortType.RATING:
      return {
        sort: ISortType.RATING,
        products: [...state.products].sort(
          (a, b) => (b.reviewAvg ?? 0) - (a.reviewAvg ?? 0),
        ),
      };
    case ISortType.PRICE:
      return {
        sort: ISortType.PRICE,
        products: [...state.products].sort((a, b) => b.price - a.price),
      };
    default:
      return state;
  }
}
