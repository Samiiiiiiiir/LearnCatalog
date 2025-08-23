import { useRouter } from 'next/navigation';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

export const useNavigateSearch = ({
  setisMenuOpened,
}: {
  setisMenuOpened: Dispatch<SetStateAction<boolean>> | undefined;
}) => {
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

  return {
    search,
    setSearch,
    navigateToSearch,
  };
};
