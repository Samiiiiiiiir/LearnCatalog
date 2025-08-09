interface ICourseItem {
  title: string;
  description: string;
  tags: string[];
  bgColor: string;
  href: string;
}

type ICoursesData = ICourseItem[];

export const coursesData: ICoursesData = [
  {
    title: 'Master SEO Basics to Grow Your Online Presence',
    description:
      'Learn how to boost your website’s visibility in search engines, optimize content effectively, and attract a larger audience to grow your online presence.',
    tags: ['marketing', 'digital', 'SEO'],
    bgColor: '#F0E6FF',
    href: '/courses/seo',
  },
  {
    title: 'Create Games with Unity from Concept to Launch',
    description:
      'Discover how to create immersive 2D and 3D games using the Unity engine, add interactivity, and publish your projects across multiple platforms.',
    tags: ['game development', 'programming', 'Unity'],
    bgColor: '#D0F0FD',
    href: '/courses/unity',
  },
  {
    title: 'Product Management',
    description:
      'Gain essential skills to manage products efficiently, from concept and development to launch and scaling, driving business success.',
    tags: ['management', 'business', 'product management'],
    bgColor: '#FFEFD6',
    href: '/courses/product-manager',
  },
  {
    title: 'Python for Beginners',
    description:
      'Master the fundamentals of Python programming, including syntax, data manipulation, and automation techniques used in diverse industries.',
    tags: ['programming', 'Python', 'tech education'],
    bgColor: '#E6F9E6',
    href: '/courses/python',
  },
  {
    title: 'Machine Learning Foundations',
    description:
      'Understand the core concepts of machine learning, explore popular algorithms, and learn how to process data to build effective predictive models.',
    tags: ['AI', 'machine learning', 'data science'],
    bgColor: '#FFF5E6',
    href: '/courses/machine-learning',
  },
];
