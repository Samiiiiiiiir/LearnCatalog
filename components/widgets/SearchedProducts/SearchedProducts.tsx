import { Section, Heading, ProductCard } from '@/components';
import { ISearchedProducts } from '@/types';

import styles from './searchedProducts.module.scss';

interface SearchedProductsProps {
  data: ISearchedProducts;
  value: string;
  total: number;
}

export const SearchedProducts = ({
  data,
  value,
  total,
}: SearchedProductsProps) => {
  return (
    <Section>
      {data.length > 0 ? (
        <>
          <Heading className={styles.title} type="h1">
            Found Courses <span>{total ? `(${total})` : ''}</span> :
          </Heading>
          <ul className={styles.products}>
            {data.map((i) => (
              <li key={i._id}>
                <ProductCard {...i} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Heading type="h1">
          No courses found for{' '}
          <span className={styles.value}>&quot;{value}&quot;</span>. Try another
          search?
        </Heading>
      )}
    </Section>
  );
};
