export interface IProductItem {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: ProductCharacteristic[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: IReview[];
  reviewCount: number;
  reviewAvg?: number;
  advantages?: string;
  disadvantages?: string;
}

export interface ProductCharacteristic {
  value: string;
  name: string;
}

export interface IReview {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: string;
}
