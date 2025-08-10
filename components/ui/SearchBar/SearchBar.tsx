'use client';

import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components';
import { SearchIcon } from '@/assets';

import styles from './searchBar.module.scss';

interface SearchBarProps {
  setisMenuOpened?: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar = ({ setisMenuOpened }: SearchBarProps) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const navigateToSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const params = new URLSearchParams({ value: search.trim() });
    router.push(`/search?${params.toString()}`);

    setSearch('');

    if (setisMenuOpened) {
      setisMenuOpened(false);
    }
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
