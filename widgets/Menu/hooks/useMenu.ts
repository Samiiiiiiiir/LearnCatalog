import { IMenuItem } from '@/types';
import { useParams } from 'next/navigation';
import { KeyboardEvent, useEffect, useState } from 'react';

export const useMenu = (data: IMenuItem[][]) => {
  const [secondLevelMenus, setSecondLevelMenus] = useState<IMenuItem[][]>(data);

  const { type, alias } = useParams();

  useEffect(() => {
    if (!alias) {
      const newMenus = secondLevelMenus.map((menu) =>
        menu.map((i) => {
          return {
            ...i,
            isOpen: false,
          };
        }),
      );
      setSecondLevelMenus(newMenus);
    }
  }, [type, alias]);

  const openSecondLevel = (secondCategory: string) => {
    const newMenus = secondLevelMenus.map((menu) =>
      menu.map((i) => {
        if (i._id.secondCategory === secondCategory) {
          return {
            ...i,
            isOpen: !i.isOpen,
          };
        }
        return {
          ...i,
          isOpen: false,
        };
      }),
    );
    setSecondLevelMenus(newMenus);
  };

  const openSecondLevelByKeyboard = (
    e: KeyboardEvent<HTMLButtonElement>,
    secondCategory: string,
  ) => {
    if (e.code == 'Space' || e.key == 'Enter') {
      e.preventDefault();

      openSecondLevel(secondCategory);
    }
  };

  return {
    secondLevelMenus,
    openSecondLevel,
    openSecondLevelByKeyboard,
  };
};
