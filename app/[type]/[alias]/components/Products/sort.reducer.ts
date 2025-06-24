import { IProductItem } from '@/types/ProductItem';
import { SortType } from '@/types/SortType';

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
          (a, b) => a.initialRating - b.initialRating,
        ),
      };
    case SortType.PRICE:
      return {
        sort: SortType.PRICE,
        products: [...state.products].sort((a, b) => a.price - b.price),
      };
    default:
      return state;
  }
}
