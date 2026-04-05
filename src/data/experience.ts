import type { ExperienceEntry } from '@/types';

export const experience: ExperienceEntry[] = [
  {
    id: 'amazon-sde',
    company: 'Amazon',
    role: 'Software Development Engineer I',
    period: 'Sep 2024 – Present',
    description:
      'Building and maintaining scalable distributed systems for compliance and seller operations. Identified critical design gaps in inherited KYC integration logic, designed deployment strategies for subscription campaigns across Latin America, and resolved 80%+ on-call tickets autonomously.',
    metrics: ['$2.8B in potential losses prevented', '$7M+ in potential losses prevented', '80%+ on-call tickets resolved'],
    isPrimary: true,
  },
  {
    id: 'psl-intern',
    company: 'P/S/L Group',
    role: 'Application Developer Intern',
    period: 'Feb – Jun 2024',
    description:
      'Full-stack development of pharmaceutical management systems using PHP, TypeScript, JavaScript, and React. Delivered results through Scrum methodology, leveraging AWS services including CodeCommit, and working with SQL/NoSQL databases.',
    metrics: ['Full-stack pharmaceutical systems', 'Scrum delivery', 'AWS + SQL/NoSQL'],
    isPrimary: false,
  },
  {
    id: 'ge-intern',
    company: 'General Electric',
    role: 'Aviation Systems Intern',
    period: 'Apr – Dec 2023',
    description:
      'Programmed and tested automatic control codes for aircraft systems (E747, E737). Performed black-box and white-box testing, applied Scrum and Lean methodologies, and conducted software requirements analysis using IBM DOORS.',
    metrics: ['Aircraft systems (E747, E737)', 'Black-box & white-box testing', 'IBM DOORS analysis'],
    isPrimary: false,
  },
];
