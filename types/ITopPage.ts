export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface ITopPage {
  tags: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  advantages?: Advantage[];
  seoText?: string;
  hh?: Hh;
}

export interface Advantage {
  _id: string;
  title: string;
  description: string;
}

export interface Hh {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}
