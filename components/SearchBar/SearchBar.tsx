'use client';

import { KeyboardEvent, useState } from 'react';
import { Button, Input } from '@/components';
import styles from './searchBar.module.scss';
import SearchIcon from './search.svg';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const navigateToSearch = () => {
    const params = new URLSearchParams({ value: search });
    router.push(`/search?${params.toString()}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigateToSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <Input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button className={styles.button} onClick={navigateToSearch}>
        <SearchIcon className={styles.icon} />
      </Button>
    </div>
  );
};
