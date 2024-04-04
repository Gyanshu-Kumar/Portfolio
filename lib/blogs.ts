import { BlogProps } from '@/pages/blog';

export const getBlogs = function (): BlogProps[] {
  return [
    {
      title: '🚀🚀Introduction to REST_API🚀🚀',
      linkType: 'external',
      link: 'https://dev.to/gyanshukumar/introduction-to-restapi-1i4k/',
      publishedAt: {
        year: 2024,
      },
    },
    {
      title: '🚀What is MERN Stack🚀',
      linkType: 'external',
      link: 'https://www.linkedin.com/posts/gyanshu-kumar_mern-document-activity-7159494758938075137-7NSz?utm_source=share&utm_medium=member_desktop/',
      publishedAt: {
        year: 2023,
      },
    },
    // {
    //   title: 'Introduction to Terraform',
    //   linkType: 'external',
    //   link: 'https://dev.to/ooye_sanket/introduction-to-terraform-10j2',
    //   publishedAt: {
    //     year: 2023,
    //   },
    // },
  ];
};
