import { IProductItem } from '@/types/ProductItem';
import { Heading } from '../Heading/Heading';
import Image from 'next/image';
import { Tag } from '../Tag/Tag';
import { FormattedPrice } from '../FormattedPrice/FormattedPrice';
import { Rating } from '../Rating/Rating';
import styles from './productCard.module.scss';
import { Paragraph } from '../Paragraph/Paragraph';
import { Button } from '../Button/Button';
import { Fragment } from 'react';
import { Card } from '../Card/Card';
import { formatReviewCount } from '@/helpers/formatReviewCount';

interface ProductCardProps extends IProductItem {}

export const ProductCard = (props: ProductCardProps) => {
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerPreview}>
          <Image
            className={styles.logo}
            src={props.image}
            alt={props.title}
            width={70}
            height={70}
          />
          <div className={styles.titleBlock}>
            <Heading type="h2">{props.title}</Heading>
            <div className={styles.categories}>
              {props.categories.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.headerInner}>
          <div className={styles.priceBlock}>
            <div className={styles.price}>
              <FormattedPrice
                price={props.price}
                className={styles.priceValue}
              />
              <Tag color="green">
                <FormattedPrice price={props.price - props.oldPrice} />
              </Tag>
            </div>
            <span>price</span>
          </div>
          <div className={styles.creditBlock}>
            <div className={styles.credit}>
              <FormattedPrice
                price={props.credit}
                className={styles.priceValue}
              />
              <span>/mo</span>
            </div>
            <span>on credit</span>
          </div>
          <div className={styles.ratingBlock}>
            <Rating
              initialRating={props.reviewAvg}
              title={props.reviewAvg ? `Rating: ${props.reviewAvg}` : ''}
            />
            <span>{formatReviewCount(props.reviewCount)}</span>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <Paragraph>{props.description}</Paragraph>
        <div className={styles.details}>
          <div>
            <dl className={styles.features}>
              {props.characteristics.map((c) => (
                <Fragment key={c.name}>
                  <dt className={styles.feature}>{c.name}</dt>
                  <dd>{c.value}</dd>
                </Fragment>
              ))}
            </dl>
            <div className={styles.tags}>
              {props.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
          <div className={styles.summary}>
            {props.advantages && (
              <div className={styles.advantagesBlock}>
                <Heading type="h4" className={styles.summaryTitle}>
                  Advantages
                </Heading>
                <Paragraph>{props.advantages}</Paragraph>
              </div>
            )}
            {props.disadvantages && (
              <div className={styles.disadvantagesBlock}>
                <Heading type="h4" className={styles.summaryTitle}>
                  Disadvantages
                </Heading>
                <Paragraph>{props.disadvantages}</Paragraph>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button>Find out more</Button>
        <Button appearance="secondary" arrow="right">
          Read reviews
        </Button>
      </div>
    </Card>
  );
};
