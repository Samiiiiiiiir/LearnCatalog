export const API = {
  topPage: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/topPage/find',
    byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/topPage/byAlias',
  },
  product: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/products/find',
  },
  review: {
    create: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create',
  },
};
