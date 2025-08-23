'use client';

import Link from 'next/link';
import type { Swiper as SwiperType } from 'swiper';
import clsx from 'clsx';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Button, Heading, Paragraph, Section, Tag } from '@/ui';
import { SliderArrowIcon } from '@/assets';
import { coursesData } from './coursesData';

import 'swiper/css';
import styles from './newCourses.module.scss';

export const NewCourses = () => {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <Section>
      <div className={styles.top}>
        <Heading className={styles.title} type="h2">
          New Courses
        </Heading>
        <Button
          appearance="transparent"
          onClick={() => swiperRef.current?.slidePrev()}
          className={styles.arrow}
          aria-label="Previous slide"
        >
          <SliderArrowIcon />
        </Button>
        <Button
          appearance="transparent"
          className={clsx(styles.arrow, styles.arrowRight)}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          <SliderArrowIcon />
        </Button>
      </div>
      <div className={styles.sliderWrapper}>
        <Swiper
          className={styles.swiper}
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Pagination]}
          pagination={{
            el: `.${styles.pagination}`,
            clickable: true,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          loop={true}
          autoplay={{
            delay: 8000,
          }}
          observer={true}
          observeParents={true}
          slidesPerView={1}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {coursesData.map(({ description, tags, title, bgColor, href }) => (
            <SwiperSlide
              key={title}
              className={styles.slide}
              style={{ backgroundColor: bgColor }}
            >
              <Heading type="h3" className={styles.slideTitle}>
                {title}
              </Heading>
              <Paragraph className={styles.slideText} size="sm">
                {description}
              </Paragraph>
              <div className={styles.tags}>
                {tags.map((text) => (
                  <Tag key={text}>{text}</Tag>
                ))}
              </div>
              <Link className={styles.slideLink} href={href}>
                Try it now!
                <div className={styles.slideArrow}>
                  <SliderArrowIcon />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pagination}></div>
      </div>
    </Section>
  );
};
