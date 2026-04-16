import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'kyc-integration',
    featured: true,
    techStack: ['Java', 'AWS Internal Services', 'DynamoDB', 'SQS', 'API Gateway', 'Deployment Pipelines'],
    diagramPlaceholder: true,
  },
  {
    slug: 'subscription-campaigns',
    featured: true,
    techStack: ['JSON', 'Java', 'AWS Internal Services', 'DynamoDB', 'Deployment Pipelines', 'Monitoring & Alerting'],
    diagramPlaceholder: true,
  },
  {
    slug: 'aviation-forecast',
    featured: true,
    techStack: ['Python', 'TensorFlow', 'XGBoost', 'scikit-learn', 'LightGBM', 'Pandas', 'NumPy'],
    diagramPlaceholder: true,
  },
  {
    slug: 'gnp-michelin',
    featured: false,
    techStack: ['TypeScript', 'React', 'PostgreSQL', 'AWS', 'Jest', 'Jira'],
    repoUrl: 'https://github.com/softwaredelta/GNP',
  },
  {
    slug: 'traffic-simulation',
    featured: false,
    techStack: ['Python', 'Mesa', 'Pandas', 'OOP'],
    repoUrl: 'https://github.com/ulmo369/Projects_Evidence/tree/master/MultiAgents',
  },
  {
    slug: 'natgas-platform',
    featured: false,
    techStack: ['Node.js', 'Express', 'MySQL', 'Airtable API', 'npm'],
    repoUrl: 'https://github.com/Diego583/Deeltech_repository',
  },
  {
    slug: 'escencia-patrimonio',
    featured: false,
    techStack: ['Kotlin', 'Android SDK'],
    repoUrl: 'https://github.com/ulmo369/Projects_Evidence/tree/master/App',
  },
  {
    slug: 'scheme-lexer',
    featured: false,
    techStack: ['C++', 'HTML', 'CSS', 'Regex'],
    repoUrl: 'https://github.com/ulmo369/Projects_Evidence/tree/master/Lexer',
  },
  {
    slug: 'oop-fighting-game',
    featured: false,
    techStack: ['C++', 'OOP (Inheritance, Polymorphism, Composition)'],
    repoUrl: 'https://github.com/ulmo369/Projects_Evidence/tree/master/OOP2',
  },
  {
    slug: 'competitive-programming',
    featured: false,
    techStack: ['Python', 'C++', 'Algorithms', 'Data Structures'],
    repoUrl: 'https://github.com/ulmo369/interview_programming',
  },
];
