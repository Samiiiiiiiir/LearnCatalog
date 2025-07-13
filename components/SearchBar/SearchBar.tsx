'use client';

import { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components';

import SearchIcon from './search.svg';

import styles from './searchBar.module.scss';

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
    <form className={styles.searchBar} role="search">
      <Input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        aria-label="Search the site"
        className={styles.button}
        onClick={navigateToSearch}
      >
        <SearchIcon className={styles.icon} />
      </Button>
    </form>
  );
};
