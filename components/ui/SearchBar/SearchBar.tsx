'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components';
import { SearchIcon } from '@/assets';

import styles from './searchBar.module.scss';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const navigateToSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams({ value: search });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      className={styles.searchBar}
      role="search"
      onSubmit={navigateToSearch}
    >
      <Input
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button aria-label="Search the site" className={styles.button}>
        <SearchIcon className={styles.icon} />
      </Button>
    </form>
  );
};
