'use client';

import { useState } from 'react';
import { Button, Heading, Paragraph, Rating, Tag } from '@/components';

export default function Home() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Heading type="h1">h1 title</Heading>
      <Button appearance="primary" arrow="down">
        Узнать подробнее
      </Button>
      <Paragraph size="lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, dicta.
      </Paragraph>
      <Tag color="blue">in</Tag>
      <Rating
        isEditable={true}
        initialRating={rating}
        setRating={(n) => setRating(n)}
      />
    </>
  );
}
