'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Search() {
  const searchParams = useSearchParams();

  const value = searchParams.get('value');

  return <div>Value - {value ? value : ''}</div>;
}

export default function SearchPage() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
