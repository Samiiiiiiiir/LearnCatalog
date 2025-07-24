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
  advantages?: Advantage[];
  seoText?: string;
  ln?: Ln;
}

export interface Advantage {
  _id: string;
  title: string;
  description: string;
}

export interface Ln {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}
