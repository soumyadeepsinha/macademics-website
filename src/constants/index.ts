import {
  FolderInputIcon,
  HelpingHand,
  HomeIcon,
  MessageSquare,
  NotebookPenIcon
} from 'lucide-react';

export const routes = [
  {
    label: 'Home',
    icon: HomeIcon,
    href: '/',
    color: 'text-sky-600',
  },
  {
    label: 'About us',
    icon: MessageSquare,
    href: '/#about',
    color: 'text-violet-600',
  },
  {
    label: 'Writing Services',
    icon: NotebookPenIcon,
    color: 'text-green-700',
    href: '/services',
  },
  // {
  //   label: 'Assignment Help',
  //   icon: PenLineIcon,
  //   color: 'text-pink-700',
  //   href: '/#assignment-help',
  // },
  // {
  //   label: 'Dissertation Help',
  //   icon: BookOpenCheckIcon,
  //   color: 'text-orange-700',
  //   href: '/video',
  // },
  {
    label: 'Quality Check',
    icon: FolderInputIcon,
    color: 'text-emerald-500',
    href: '/quality-check',
  },
  {
    label: 'Get Help',
    icon: HelpingHand,
    href: '/help',
  },
];