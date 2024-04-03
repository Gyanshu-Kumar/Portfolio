import { ProjectItemProps } from '@/components/main/ProjectSection';

export const getProjects = function (): ProjectItemProps[] {
  let projects: ProjectItemProps[] = [
  
    {
      projectTitle: 'Kode Keeper',
      projectData: {
        githubURL: 'https://github.com/ooye-sanket/todo-buddy',
        relatedLinks: [
        
        ],
      },
      description: [
        'Innovative markdown editor with preview features.',
        'Built to fill missing functionalities like text-to-speech and advanced code syntax highlighting',
        'Tech stack includes:-  NextJS, ReactJS, and NodeJS',
      ],
      tech: ['React', 'TailwindCSS', 'CSS', 'GitHub Pages', 'Figma'],
      category: ['Extension', 'React', 'NodeJS',],
      status: 'Maintained',
    },
    {
      projectTitle: "Live Cricket Score[Chrome Extension]",
      projectData: {
        githubURL: "https://github.com/Gyanshu-Kumar/Live_Cricket_Score",
        liveURL: "",
      },
      description: [
        'Developed, tested, and implemented a cutting-edge Google Chrome extension for cricket enthusiasts, providing instant, accurate score updates; boosted user satisfaction and interaction rates by 40% within 3 months.',
        'Enhanced a productivity feature enabling seamless viewing of scores while working on laptops, eliminating interruptions from tab-switching; improved user retention by 40% and increased daily active users by 25%.',
        'Tech stack includes:-  NextJS, ReactJS, and NodeJS',
      ],
      tech: ['HTML', 'CSS', 'JSON', 'javascript'],
      category: ['Extension'],
      status: 'Open Source',
    },
    {
      projectTitle: 'G-mart',
      projectData: {
        githubURL: 'https://github.com/Gyanshu-Kumar/G-mart',
        liveURL: 'https://g-mart-23zd.vercel.app',
        relatedLinks: [
     
        ],
      },
      description: [
        'Launched G-Mart, an online grocery platform for local store shopping, boosting customer convenience.',
        'Engineered and deployed a cutting-edge real-time chat system for seamless communication with shopkeepers leading to a 50% reduction in response time and a 25% boost in customer satisfaction rating',
        'Implemented Email-Based Authentication System, streamlining login process; Reduced login errors by 40% and improved user experience, resulting in a 25% increase in user retention.',
        'Launched Become a Seller feature on website, enabling users to register as sellers; Enhanced platform offerings with 500+ new products, boosting revenue by 30% in the first quarter.',
        'Integrated Stripe for secure online Payment..',
       
      ],
      tech: ['NextJS', 'Authentication', 'Vercel', 'React', 'NPM', 'Vite', 'Javascript', 'Server components','NodeJS','ExpressJS', 'MongoDB', ],
      status: 'Maintained',
      category: ['JavaScript',  'Chrome API'] 
    }
  ];

  return projects.reverse();
};
