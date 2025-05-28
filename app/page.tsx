'use client';

import { Button, Heading, Paragraph, Rating, Tag } from '@/components';
import { useState } from 'react';

export default function Home() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <Heading type="h1">h1 title</Heading>
      <Heading type="h2">h2 title</Heading>
      <Heading type="h3">h3 title</Heading>
      <Button appearance="primary" arrow="down">
        Узнать подробнее
      </Button>
      <Paragraph size="lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, dicta.
      </Paragraph>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, dicta.
      </Paragraph>
      <Paragraph size="sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, dicta.
      </Paragraph>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Tag color="blue">in</Tag>
        <Tag color="ghost" size="sm">
          design
        </Tag>
        <Tag color="ghost" size="md">
          design
        </Tag>
        <Tag color="gray">in</Tag>
        <Tag color="green">in</Tag>
        <Tag color="primary">in</Tag>
        <Rating
          isEditable={true}
          initialRating={rating}
          setRating={(n) => setRating(n)}
        />
      </div>
    </div>
  );
}
