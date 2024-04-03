import { ExperienceItemProps } from '@/components/main/ExperienceSection';

export const getExperiences = function (): ExperienceItemProps[] {
  return [
    // {
    //   experienceTitle: 'Frontend Engineering Intern',
    //   experienceDescription: [],
    //   experienceOrg: {
    //     name: 'Devfolio',
    //     link: 'https://devfolio.co',
    //     websiteDisplayName: 'devfolio.co',
    //   },
    //   experienceStatus: {
    //     startAt: 'Oct, 2023',
    //   },
    // },
    
    {
      experienceTitle: 'Machine Learning Internship',
      experienceDescription: [
        'Successfully completed an advanced task-based internship focused on machine learning applications',
        'Developed a full-stack Pizza Delivery application utilizing machine learning algorithms for enhancing user experience and optimizing delivery routes',
        'Built applications using machine learning frameworks such as TensorFlow and scikit-learn, alongside frontend technologies including React (HTML, CSS, JavaScript)',
        'Acquired knowledge about machine learning tools and technologies such as Python, Neural Network for data storage and management.',
      ],
      experienceOrg: {
        name: '(Virtual Internship)',
        link: 'https://drive.google.com/file/d/1fmXvJg0sxceIlabma281_JPz-D9NiLly/view?usp=sharing/',
        websiteDisplayName: 'Internshala',
      },
      experienceStatus: {
        startAt: 'Jul, 2022',
        endAt: 'Jan, 2023',
      },
    },
    // {
    //   experienceTitle: 'Mentee at Keploy DevRel Cohort 4.0',
    //   experienceDescription: [
    //     'Actively participated as a mentee in Keploy DevRel Cohort 4.0, gaining comprehensive insights into Developer Relations (DevRel) practices.',
    //     'Developed expertise in DevRel practices, authored two blog posts, and conducted a virtual session.',
    //     'Contributed to community learning and fostered professional development within the cohort.',
    //   ],
    //   experienceOrg: {
    //     name: 'Keploy',
    //     link: 'https://asyncapi.com',
    //     websiteDisplayName: 'Keploy',
    //   },
    //   experienceStatus: {
    //     startAt: 'Sept, 2023',
    //     endAt: 'Oct, 2023',
    //   },
    // },
  
  ];
};