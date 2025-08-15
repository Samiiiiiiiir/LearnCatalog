'use client';

import { Dispatch, SetStateAction } from 'react';
import { useNavigateSearch } from '@/hooks';
import { Button, Input } from '@/components';
import { SearchIcon } from '@/assets';

import styles from './searchBar.module.scss';

interface SearchBarProps {
  setisMenuOpened?: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar = ({ setisMenuOpened }: SearchBarProps) => {
  const { search, setSearch, navigateToSearch } = useNavigateSearch({
    setisMenuOpened,
  });

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
