import { ContactItemProps } from '@/components/main/ContactSection';

export const getContacts = function (): ContactItemProps[] {
  return [
    {
      title: 'GitHub',
      link: {
        display: 'Gyanshu Kumar',
        url: 'https://github.com/Gyanshu-Kumar',
      },
    },
    {
      title: 'Twitter',
      link: {
        display: 'Gyanshu Kumar',
        url: 'https://twitter.com/Gyanshukumar5',
      },
    },
    {
      title: 'LinkedIn',
      link: {
        display: 'linkedin.com/in/Gyanshu Kumar',
        url: 'https://linkedin.com/in/gyanshu-kumar/',
      },
    },
    {
      title: 'Leetcode',
      link: {
        display: 'Gyanshu Kumar',
        url: 'https://leetcode.com/Gyanshu152/',
      },
    },
    {
      title: 'Instagram',
      link: {
        display: 'Gyanshu Kumar',
        url: 'https://www.instagram.com/gyanshu_kumar15/?next=%2F/',
      },
    },
    {
      title: 'Schedule a meeting',
      link: {
        display: 'cal.com/gyanshu-kumar-xehqii',
        url: 'https://cal.com/gyanshu-kumar-xehqii',
      },
    },
    {
      title: 'Resume',
      link: {
        display: 'Gyanshu Kumar/resume',
        url: '/resume',
      },
    },
  ];
};
