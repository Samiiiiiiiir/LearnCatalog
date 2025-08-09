import { FC, SVGProps } from 'react';
import {
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
  TelegramIcon,
  FacebookIcon,
} from '@/assets';

interface ISocial {
  label: string;
  href: string;
  Icon: FC<SVGProps<SVGElement>>;
}

type IsocialsList = ISocial[];

export const socialsList: IsocialsList = [
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/',
    Icon: LinkedinIcon,
  },
  {
    label: 'instagram',
    href: 'https://www.instagram.com/',
    Icon: InstagramIcon,
  },
  {
    label: 'telegram',
    href: 'https://web.telegram.org/a/',
    Icon: TelegramIcon,
  },
  {
    label: 'youtube',
    href: 'https://www.youtube.com/',
    Icon: YoutubeIcon,
  },
  {
    label: 'facebook',
    href: 'https://www.facebook.com/',
    Icon: FacebookIcon,
  },
];
