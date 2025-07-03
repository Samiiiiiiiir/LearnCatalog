'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
import {
  Review,
  Card,
  Button,
  Paragraph,
  Rating,
  Tag,
  Heading,
  FormattedPrice,
  ReviewForm,
} from '@/components';
import { formatReviewCount } from '@/helpers';
import { IProductItem } from '@/types';

import styles from './productCard.module.scss';

interface ProductCardProps extends IProductItem {}

export const ProductCard = (props: ProductCardProps) => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  return (
    <article>
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
              <Rating initialRating={props.reviewAvg} />
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
          <Button
            onClick={() => setIsReviewsOpen((prev) => !prev)}
            appearance="secondary"
            arrow={isReviewsOpen ? 'down' : 'right'}
          >
            Read reviews
          </Button>
        </div>
      </Card>
      {isReviewsOpen && (
        <Card className={styles.reviewBlock} color="lightgrey">
          <Review list={props.reviews} />
          <ReviewForm productId={props._id} />
        </Card>
      )}
    </article>
  );
};
