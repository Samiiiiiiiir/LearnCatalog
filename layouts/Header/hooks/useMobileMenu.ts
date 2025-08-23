import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useMobileMenu = () => {
  const [isMenuOpened, setisMenuOpened] = useState(false);
  const { type, alias } = useParams();

  useEffect(() => {
    setisMenuOpened(false);
  }, [alias, type]);

  useEffect(() => {
    if (isMenuOpened) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpened]);

  return {
    isMenuOpened,
    setisMenuOpened,
  };
};
