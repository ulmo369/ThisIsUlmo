import type { ExperienceEntry } from '@/types';

export const experience: ExperienceEntry[] = [
  {
    id: 'amazon-sde',
    company: 'Amazon',
    role: 'Software Development Engineer',
    period: '2022 – Present',
    description:
      'Building scalable distributed systems and AI-powered solutions for customer-facing products. Leading technical design for high-impact projects across payments, compliance, and machine learning infrastructure.',
    metrics: ['$2.8B business impact', '$7M saved annually', '80%+ tickets resolved autonomously'],
    isPrimary: true,
  },
  {
    id: 'startup-swe',
    company: 'Tech Startup',
    role: 'Software Engineer',
    period: '2020 – 2022',
    description:
      'Full-stack development on a SaaS platform serving enterprise clients. Owned the billing and subscription microservices, contributing to a 3x growth in recurring revenue.',
    metrics: ['3x revenue growth', '99.9% API uptime', '50+ REST endpoints'],
    isPrimary: false,
  },
  {
    id: 'university-ra',
    company: 'University Research Lab',
    role: 'Research Assistant – AI & Data Science',
    period: '2018 – 2020',
    description:
      'Conducted research in machine learning and natural language processing. Published findings on transformer-based models for domain-specific text classification.',
    metrics: ['2 publications', '94% model accuracy', '10K+ dataset samples curated'],
    isPrimary: false,
  },
];
