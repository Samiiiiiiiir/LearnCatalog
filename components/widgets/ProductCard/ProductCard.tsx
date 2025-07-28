'use client';

import Image from 'next/image';
import { Fragment, Ref, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
import Link from 'next/link';

interface ProductCardProps extends IProductItem {
  ref: Ref<HTMLElement>;
}

const reviewsVariants = {
  visible: {
    height: 'auto',
    visibility: 'visible',
  },
  hidden: {
    height: 0,
    overflow: 'hidden',
    visibility: 'hidden',
  },
};

export const ProductCard = motion((props: ProductCardProps) => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);

  const reviewsRef = useRef<HTMLDivElement>(null);

  const handleReviewClick = () => {
    if (shouldScroll) {
      scrollToReviews();
    } else {
      setIsReviewsOpen(true);
      setShouldScroll(true);
    }
  };

  const scrollToReviews = () => {
    if (reviewsRef.current && shouldScroll) {
      reviewsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      reviewsRef.current.focus();
    }
  };

  return (
    <article ref={props.ref}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerPreview}>
            <Link className={styles.logoLink} href={props.link} target="_blank">
              <Image
                className={styles.logo}
                src={props.image}
                alt={props.title}
                width={70}
                height={70}
              />
            </Link>
            <div className={styles.titleBlock}>
              <Heading className={styles.title} type="h2">
                <Link href={props.link} target="_blank">
                  {props.title}
                </Link>
              </Heading>
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
              <Button appearance="transparent" onClick={handleReviewClick}>
                <span>{formatReviewCount(props.reviewCount)}</span>
              </Button>
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
                  <Heading type="h3" className={styles.summaryTitle}>
                    Advantages
                  </Heading>
                  <Paragraph>{props.advantages}</Paragraph>
                </div>
              )}
              {props.disadvantages && (
                <div className={styles.disadvantagesBlock}>
                  <Heading type="h3" className={styles.summaryTitle}>
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
            onClick={() => {
              setIsReviewsOpen((prev) => !prev);
              setShouldScroll(false);
            }}
            appearance="secondary"
            arrow={isReviewsOpen ? 'down' : 'right'}
            aria-expanded={isReviewsOpen}
          >
            Read reviews
          </Button>
        </div>
      </Card>
      <motion.div
        variants={reviewsVariants}
        initial="hidden"
        animate={isReviewsOpen ? 'visible' : 'hidden'}
        ref={reviewsRef}
        onAnimationComplete={() => scrollToReviews()}
        tabIndex={isReviewsOpen ? 0 : -1}
      >
        <Card className={styles.reviewBlock} color="lightgrey">
          <Review list={props.reviews} />
          <ReviewForm productId={props._id} />
        </Card>
      </motion.div>
    </article>
  );
});
